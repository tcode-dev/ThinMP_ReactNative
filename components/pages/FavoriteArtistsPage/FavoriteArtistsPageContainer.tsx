import { useEffect } from 'react';
import FavoriteArtistsPagePresenter from './FavoriteArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const FavoriteArtistsPageContainer = () => {
  const { fetchFavoriteArtists } = useArtistsStore();

  useEffect(() => {
    fetchFavoriteArtists();
  }, [fetchFavoriteArtists]);

  return <FavoriteArtistsPagePresenter />;
};

export default FavoriteArtistsPageContainer;
