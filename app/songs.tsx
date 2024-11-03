import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongList from '@/components/organism/common/SongList';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Songs</Text>
      <SongList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

export default SongsPage;
