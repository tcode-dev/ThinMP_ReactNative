import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistRepository } from '@/repository/PlaylistRepository';

export class PlaylistService {
  getPlaylists(): PlaylistModel[] {
    const playlistRepository = new PlaylistRepository();
    const playlists = playlistRepository.findPlaylists();

    return playlists.map(playlist => PlaylistModel.fromEntity(playlist));
  }

  getPlaylistDetail(id: number): PlaylistModel | null {
    const playlistRepository = new PlaylistRepository();
    const result = playlistRepository.findPlaylist(id);

    return result ? PlaylistModel.fromEntity(result) : null;
  }
}
