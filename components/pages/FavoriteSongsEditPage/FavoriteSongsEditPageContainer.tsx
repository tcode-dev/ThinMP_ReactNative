import { useCallback } from 'react';
import FavoriteSongsEditPagePresenter from './FavoriteSongsEditPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import { useFocusEffect } from 'expo-router';

const FavoriteSongsEditPageContainer = () => {
  const { loadFavoriteSongs, resetSongs } = useSongsStore();

  useFocusEffect(
    useCallback(() => {
      loadFavoriteSongs();

      return () => {
        resetSongs();
      };
    }, [loadFavoriteSongs, resetSongs])
  );

  return <FavoriteSongsEditPagePresenter />;
};

export default FavoriteSongsEditPageContainer;
