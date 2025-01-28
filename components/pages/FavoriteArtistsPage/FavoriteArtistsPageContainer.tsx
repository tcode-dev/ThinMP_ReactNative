import { useEffect } from 'react';
import FavoriteArtistsPagePresenter from './FavoriteArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const FavoriteArtistsPageContainer = () => {
  const { fetchFavoriteArtists, resetArtists } = useArtistsStore();

  useEffect(() => {
    fetchFavoriteArtists();

    return () => {
      resetArtists();
    };
  }, [fetchFavoriteArtists, resetArtists]);

  return <FavoriteArtistsPagePresenter />;
};

export default FavoriteArtistsPageContainer;
