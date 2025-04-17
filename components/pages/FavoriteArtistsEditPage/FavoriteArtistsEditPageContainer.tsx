import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import FavoriteArtistsEditPagePresenter from './FavoriteArtistsEditPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const FavoriteArtistsEditPageContainer = () => {
  const { loadFavoriteArtists, resetArtists } = useArtistsStore();

  useFocusEffect(
    useCallback(() => {
      loadFavoriteArtists();

      return () => {
        resetArtists();
      };
    }, [loadFavoriteArtists, resetArtists])
  );

  return <FavoriteArtistsEditPagePresenter />;
};

export default FavoriteArtistsEditPageContainer;
