import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import FavoriteArtistsPagePresenter from './FavoriteArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const FavoriteArtistsPageContainer = () => {
  const { loadFavoriteArtists, resetArtists } = useArtistsStore();
  useFocusEffect(
    useCallback(() => {
      loadFavoriteArtists();

      return () => {
        resetArtists();
      };
    }, [loadFavoriteArtists, resetArtists])
  );

  return <FavoriteArtistsPagePresenter />;
};

export default FavoriteArtistsPageContainer;
