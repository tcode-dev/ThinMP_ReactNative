import { useCallback } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import { usePlayer } from '@/hooks/usePlayer';
import { useFocusEffect } from 'expo-router';

const SongsPageContainer = () => {
  const { loadAllSongs, resetSongs } = useSongsStore();
  const { playAllSongs } = usePlayer();
  const play = useCallback((index: number) => playAllSongs(index), []);

  useFocusEffect(
    useCallback(() => {
      loadAllSongs();

      return () => {
        resetSongs();
      };
    }, [loadAllSongs, resetSongs])
  );

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
