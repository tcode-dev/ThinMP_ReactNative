import { View } from 'react-native';
import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import useAlbumDetailStore from '@/store/albumDetailStore';
import SongList from '@/components/organisms/common/SongList';
import useSongsStore from '@/store/songsStore';

const AlbumDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchAlbumDetail } = useAlbumDetailStore();
  const { fetchAlbumSongs } = useSongsStore();

  useEffect(() => {
    fetchAlbumDetail(id);
    fetchAlbumSongs(id);
  }, []);

  return (
    <View>
      <SongList />
    </View>
  );
}

export default AlbumDetailPage;
