import { AlbumService } from './AlbumService';
import { ArtistService } from './ArtistService';
import { PlaylistService } from './PlaylistService';
import { SongService } from './SongService';
import { ShortcutModel } from '@/model/ShortcutModel';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { ShortcutCategory, ShortcutEntity } from '@/type/Entity';

export class ShortcutService {
  private shortcutRepository = new ShortcutRepository();
  private artistService = new ArtistService();
  private albumService = new AlbumService();
  private playlistService = new PlaylistService();
  private songService = new SongService();

  async getShortcuts(): Promise<ShortcutModel[]> {
    const entities = this.shortcutRepository.getShortcuts();
    const models = await Promise.all(
      entities.map(async (shortcut) => {
        if (shortcut.category === ShortcutCategory.Artist) {
          return await this.getShortcutArtist(shortcut);
        } else if (shortcut.category === ShortcutCategory.Album) {
          return await this.getShortcutAlbum(shortcut);
        } else if (shortcut.category === ShortcutCategory.Playlist) {
          return await this.getShortcutPlaylist(shortcut);
        } else {
          throw new Error('Invalid category');
        }
      })
    );
    const filtered = models.filter((shortcut) => shortcut !== null);

    if (!this.validate(entities, filtered)) {
      this.fixShortcuts(entities, filtered);

      return this.getShortcuts();
    }

    return filtered;
  }

  private async getShortcutArtist(shortcut: ShortcutEntity): Promise<ShortcutModel | null> {
    const artist = await this.artistService.getArtistDetail(shortcut.id);

    if (!artist) {
      return null;
    }

    return new ShortcutModel(shortcut.id, artist.name, 'artist', shortcut.category, artist.imageId!, shortcut.sort_order);
  }

  private async getShortcutAlbum(shortcut: ShortcutEntity): Promise<ShortcutModel | null> {
    const album = await this.albumService.getAlbumDetail(shortcut.id);

    if (!album) {
      return null;
    }

    return new ShortcutModel(shortcut.id, album.name, 'album', shortcut.category, album.imageId, shortcut.sort_order);
  }

  private async getShortcutPlaylist(shortcut: ShortcutEntity): Promise<ShortcutModel | null> {
    const playlist = this.playlistService.getPlaylistDetail(parseInt(shortcut.id, 10));
    const song = await this.songService.getSongPlaylistId(shortcut.id);

    if (!playlist) {
      return null;
    }

    return new ShortcutModel(shortcut.id, playlist.name, 'playlist', shortcut.category, song ? song.imageId : '', shortcut.sort_order);
  }

  private validate<T1 extends any[], T2 extends any[]>(expected: T1, actual: T2): boolean {
    return expected.length === actual.length;
  }

  private fixShortcuts(entities: ShortcutEntity[], models: ShortcutModel[]) {
    const modelIds = models.map((model) => model.id);
    const deleteIds = entities.filter((entity) => !modelIds.includes(entity.id)).map((entity) => entity.id);

    this.shortcutRepository.deleteShortcuts(deleteIds);
  }
}
