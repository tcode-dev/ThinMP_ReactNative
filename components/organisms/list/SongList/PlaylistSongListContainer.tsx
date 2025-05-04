import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongListContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state, loadSongs, resetSongs } = usePlaylistSongsStore();
  const { playPlaylistSongsState } = usePlayer();
  const play = useCallback((index: number) => playPlaylistSongsState(index), [playPlaylistSongsState]);

  useEffect(() => {
    loadSongs(playlistId);

    return () => {
      resetSongs();
    };
  }, [playlistId, loadSongs, resetSongs]);

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default PlaylistSongListContainer;
