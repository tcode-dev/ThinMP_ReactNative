import { useEffect } from 'react';
import useAlbumsStore from '@/store/albumsStore';
import AlbumsTemplate from '@/components/templates/AlbumsTemplate/AlbumsTemplateContainer';

const AlbumsPage = () => {
  const { fetchAllAlbums } = useAlbumsStore();

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return <AlbumsTemplate />;
};

export default AlbumsPage;
