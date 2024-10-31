import { Text, View } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongList from '@/components/organism/common/SongList';
import Permission from '@/components/organism/common/Permission';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <Permission>
      <View>
        <Text>Songs</Text>
        <SongList />
      </View>
    </Permission>
  );
}

export default SongsPage;
