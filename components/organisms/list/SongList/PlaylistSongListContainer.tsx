import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongListContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state, loadSongs, resetSongs } = usePlaylistSongsStore();
  const { playPlaylistSongs } = usePlayer();
  const play = useCallback((index: number) => playPlaylistSongs(index), [playPlaylistSongs]);

  useFocusEffect(
    useCallback(() => {
      loadSongs(playlistId);
    }, [playlistId, loadSongs])
  );

  useEffect(
    () => () => {
      resetSongs();
    },
    [resetSongs]
  );

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default PlaylistSongListContainer;
