import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import AlbumsPagePresenter from './AlbumsPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const AlbumsPage = () => {
  const { loadAllAlbums, resetAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      loadAllAlbums();

      return () => {
        resetAlbums();
      };
    }, [loadAllAlbums, resetAlbums])
  );

  return <AlbumsPagePresenter />;
};

export default AlbumsPage;
