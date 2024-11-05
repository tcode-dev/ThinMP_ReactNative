import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongList from '@/components/organisms/common/SongList';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <View>
      <SongList />
    </View>
  );
}

export default SongsPage;
