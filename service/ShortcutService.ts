import { AlbumService } from './AlbumService';
import { ArtistService } from './ArtistService';
import { PlaylistService } from './PlaylistService';
import { SongService } from './SongService';
import { ShortcutModel } from '@/model/ShortcutModel';
import { Category, ShortcutDTO, ShortcutRepository } from '@/repository/ShortcutRepository';

export class ShortcutService {
  private shortcutRepository = new ShortcutRepository();
  private artistService = new ArtistService();
  private albumService = new AlbumService();
  private playlistService = new PlaylistService();
  private songService = new SongService();

  async getShortcuts(): Promise<ShortcutModel[]> {
    const shortcuts = this.shortcutRepository.getShortcuts();

    return await Promise.all(
      shortcuts.map(async (shortcut) => {
        if (shortcut.category === Category.Artist) {
          return await this.getShortcutArtist(shortcut);
        } else if (shortcut.category === Category.Album) {
          return await this.getShortcutAlbum(shortcut);
        } else if (shortcut.category === Category.Playlist) {
          return await this.getShortcutPlaylist(shortcut);
        } else {
          throw new Error('Invalid category');
        }
      }),
    );
  }

  private async getShortcutArtist (shortcut: ShortcutDTO): Promise<ShortcutModel> {
    const artist = await this.artistService.getArtistDetail(shortcut.id);

    return new ShortcutModel(
      shortcut.id,
      artist.name,
      'artist',
      shortcut.category,
      artist.imageId!,
      shortcut.sort_order,
    );
  }

  private async getShortcutAlbum (shortcut: ShortcutDTO): Promise<ShortcutModel> {
    const album = await this.albumService.getAlbumDetail(shortcut.id);

    return new ShortcutModel(
      shortcut.id,
      album.name,
      'album',
      shortcut.category,
      album.imageId,
      shortcut.sort_order,
    );
  }

  private async getShortcutPlaylist (shortcut: ShortcutDTO): Promise<ShortcutModel> {
    const playlist = this.playlistService.getPlaylistDetail(shortcut.id);
    const song = await this.songService.getSongPlaylistId(shortcut.id);

    return new ShortcutModel(
      shortcut.id,
      playlist ? playlist.name : 'unknown',
      'playlist',
      shortcut.category,
      song ? song.imageId : '',
      shortcut.sort_order,
    );
  }
}
