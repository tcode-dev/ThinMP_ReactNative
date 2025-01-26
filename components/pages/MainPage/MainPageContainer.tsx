import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const MainPageContainer = () => {
  const { fetchRecentAlbums, resetAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      fetchRecentAlbums();

      return () => {
        resetAlbums();
      };
    }, [fetchRecentAlbums, resetAlbums]),
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
