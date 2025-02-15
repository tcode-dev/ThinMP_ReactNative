import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistDTO, PlaylistRepository } from '@/repository/PlaylistRepository';

export class PlaylistService {
  getPlaylists(): PlaylistModel[] {
    const playlistRepository = new PlaylistRepository();
    const playlists = playlistRepository.findPlaylists();

    return playlists.map(playlist => PlaylistModel.fromDTO(playlist));
  }

  getPlaylistDetail(id: string): PlaylistModel | null {
    const playlistRepository = new PlaylistRepository();
    const result = playlistRepository.findPlaylist(id as unknown as PlaylistDTO['id']);

    return result ? PlaylistModel.fromDTO(result) : null;
  }
}
