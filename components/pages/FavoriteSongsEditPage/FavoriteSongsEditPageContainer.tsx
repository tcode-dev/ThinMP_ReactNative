import { useEffect } from 'react';
import FavoriteSongsEditPagePresenter from './FavoriteSongsEditPagePresenter';
import { useSongsStore } from '@/store/songsStore';

const FavoriteSongsEditPageContainer = () => {
  const { loadFavoriteSongs } = useSongsStore();

  useEffect(() => {
    loadFavoriteSongs();
  }, [loadFavoriteSongs]);

  return <FavoriteSongsEditPagePresenter />;
};

export default FavoriteSongsEditPageContainer;
