import { useEffect } from 'react';
import useAlbumsStore from '@/store/albumsStore';
import AlbumsTemplate from '@/components/templates/AlbumsTemplate/AlbumsTemplatePresenter';

const AlbumsPage = () => {
  const { fetchAllAlbums, resetAlbums } = useAlbumsStore();

  useEffect(() => {
    fetchAllAlbums();

    return () => {
      resetAlbums();
    };
  }, []);

  return <AlbumsTemplate />;
};

export default AlbumsPage;
