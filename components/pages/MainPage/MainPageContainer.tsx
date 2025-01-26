import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const MainPageContainer = () => {
  const { fetchAllAlbums, resetAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      fetchAllAlbums();

      return () => {
        resetAlbums();
      };
    }, [fetchAllAlbums, resetAlbums]),
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
