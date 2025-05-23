import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useAllSongsStore } from '@/store/allSongsStore';

const AllSongListContainer = () => {
  const { state, loadSongs, resetSongs } = useAllSongsStore();
  const { playAllSongs } = usePlayer();
  const play = useCallback((index: number) => playAllSongs(index), [playAllSongs]);

  useFocusEffect(
    useCallback(() => {
      loadSongs();
    }, [loadSongs])
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

export default AllSongListContainer;
