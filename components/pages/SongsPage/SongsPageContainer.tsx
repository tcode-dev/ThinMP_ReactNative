import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useSongsStore } from '@/store/songsStore';

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
