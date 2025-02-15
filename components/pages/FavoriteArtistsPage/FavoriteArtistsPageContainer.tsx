import { useEffect } from 'react';
import FavoriteArtistsPagePresenter from './FavoriteArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const FavoriteArtistsPageContainer = () => {
  const { loadFavoriteArtists } = useArtistsStore();

  useEffect(() => {
    loadFavoriteArtists();
  }, [loadFavoriteArtists]);

  return <FavoriteArtistsPagePresenter />;
};

export default FavoriteArtistsPageContainer;
