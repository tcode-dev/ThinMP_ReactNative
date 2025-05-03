import { useCallback } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';

const SongsPageContainer = () => {
  const { playAllSongs } = usePlayer();
  const play = useCallback((index: number) => playAllSongs(index), [playAllSongs]);

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
