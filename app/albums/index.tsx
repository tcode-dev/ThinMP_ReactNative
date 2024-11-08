import { View } from 'react-native';
import { useEffect } from 'react';
import useAlbumsStore from '@/store/albumsStore';
import AlbumList from '@/components/organisms/common/AlbumList';

const AlbumsPage = () => {
  const { fetchAllAlbums } = useAlbumsStore();

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <View>
      <AlbumList />
    </View>
  );
}

export default AlbumsPage;
