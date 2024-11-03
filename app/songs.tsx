import { Text, View } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import Root from '@/components/organism/common/Root';
import SongList from '@/components/organism/common/SongList';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    // <Root>
      <View>
        <Text>Songs</Text>
        <SongList />
      </View>
    // </Root>
  );
}

export default SongsPage;
