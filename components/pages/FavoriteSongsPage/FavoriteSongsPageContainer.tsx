import { useCallback } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';

const FavoriteSongsPageContainer = () => {
  const { playSongs } = usePlayer();
  const play = useCallback((index: number) => playSongs(index), [playSongs]);

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
