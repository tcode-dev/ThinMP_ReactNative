import { useCallback, useEffect } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import { usePlayer } from '@/hooks/usePlayer';

const FavoriteSongsPageContainer = () => {
  const { loadFavoriteSongs } = useSongsStore();
  const { playSongs } = usePlayer();
  const play = useCallback((index: number) => playSongs(index), []);

  useEffect(() => {
    loadFavoriteSongs();
  }, [loadFavoriteSongs]);

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
