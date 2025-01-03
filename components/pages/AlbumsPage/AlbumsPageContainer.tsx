import { useEffect } from 'react';
import AlbumsPagePresenter from './AlbumsPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const AlbumsPage = () => {
  const { fetchAllAlbums, resetAlbums } = useAlbumsStore();

  useEffect(() => {
    fetchAllAlbums();

    return () => {
      resetAlbums();
    };
  }, []);

  return <AlbumsPagePresenter />;
};

export default AlbumsPage;
