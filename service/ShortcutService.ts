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
    const shortcutModels = await Promise.all(
      shortcuts.map(async (shortcut) => {
        if (shortcut.category === Category.Artist) {
          return await this.getArtistDetail(shortcut);
        } else if (shortcut.category === Category.Album) {
          return await this.getAlbumDetail(shortcut);
        } else if (shortcut.category === Category.Playlist) {
          return await this.getPlaylistDetail(shortcut);
        } else {
          throw new Error('Invalid category');
        }
      }),
    );

    return shortcutModels;
  }

  private async getArtistDetail (shortcut: ShortcutDTO): Promise<ShortcutModel> {
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

  private async getAlbumDetail (shortcut: ShortcutDTO): Promise<ShortcutModel> {
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

  private async getPlaylistDetail (shortcut: ShortcutDTO): Promise<ShortcutModel> {
    const playlist = this.playlistService.getPlaylistDetail(shortcut.id);
    const playlistSong = this.playlistService.getPlaylistSong(shortcut.id);
    const song = playlistSong ? await this.songService.getSongsById(playlistSong.songId) : null;

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
