import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistRepository } from '@/repository/PlaylistRepository';

export class PlaylistService {
  getPlaylists(): PlaylistModel[] {
    const playlistRepository = new PlaylistRepository();
    const playlists = playlistRepository.findPlaylists();

    return playlists.map(playlist => PlaylistModel.fromDTO(playlist));
  }
}
