import { useEffect } from 'react';
import AlbumsPagePresenter from './AlbumsPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';

const AlbumsPage = () => {
  const { loadAllAlbums } = useAlbumsStore();

  useEffect(() => {
    loadAllAlbums();
  }, [loadAllAlbums]);

  return <AlbumsPagePresenter />;
};

export default AlbumsPage;
