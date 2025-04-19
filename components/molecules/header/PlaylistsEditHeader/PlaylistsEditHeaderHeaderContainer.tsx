import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistsEditHeaderContainer = () => {
  const { state } = usePlaylistsStore();
  const done = useCallback(() => {
    if (!state.isReady) return;

    const favoritePlaylistRepository = new PlaylistRepository();
    const ids = state.value.map((playlist) => playlist.id);

    favoritePlaylistRepository.updatePlaylists(ids);
  }, [state]);

  return <EditHeader done={done} />;
};

export default PlaylistsEditHeaderContainer;
