import { useCallback, useEffect } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import { usePlayer } from '@/hooks/usePlayer';

const SongsPageContainer = () => {
  const { loadAllSongs } = useSongsStore();
  const { playAllSongs } = usePlayer();
  const play = useCallback((index: number) => playAllSongs(index), []);

  useEffect(() => {
    loadAllSongs();
  }, [loadAllSongs]);

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
