import { useEffect } from 'react';
import AlbumsPagePresenter from './AlbumsPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const AlbumsPage = () => {
  const { fetchAllAlbums } = useAlbumsStore();

  useEffect(() => {
    fetchAllAlbums();
  }, [fetchAllAlbums]);

  return <AlbumsPagePresenter />;
};

export default AlbumsPage;
