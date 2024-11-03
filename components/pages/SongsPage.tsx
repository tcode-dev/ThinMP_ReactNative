import { Text, View } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongList from '@/components/organism/common/SongList';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <View>
      <Text>Songs</Text>
      <SongList />
    </View>
  );
}

export default SongsPage;
