import { useEffect } from 'react';
import useAlbumsStore from '@/store/albumsStore';
import AlbumsPagePresenter from './AlbumsPagePresenter';

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
