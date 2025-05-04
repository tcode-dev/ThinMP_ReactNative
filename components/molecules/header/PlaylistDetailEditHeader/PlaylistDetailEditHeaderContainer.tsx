import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailEditHeaderContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state: songsState } = usePlaylistSongsStore();
  const { state: playlistDetailState } = usePlaylistDetailStore();
  const done = useCallback(() => {
    if (!songsState.isReady) return;
    if (!playlistDetailState.isReady) return;

    const playlistRepository = new PlaylistRepository();
    const ids = songsState.value.map((song) => song.id);

    playlistRepository.updatePlaylist(playlistId, playlistDetailState.value?.name ?? '', ids);
  }, [songsState, playlistDetailState, playlistId]);

  return <EditHeader done={done} />;
};

export default PlaylistDetailEditHeaderContainer;
