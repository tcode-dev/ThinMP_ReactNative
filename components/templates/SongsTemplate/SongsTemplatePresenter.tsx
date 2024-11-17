import { View, StyleSheet } from 'react-native';
import SongList from '@/components/organisms/SongList';

const SongsTemplate = () => {
  return (
    <View style={styles.container}>
      <SongList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SongsTemplate;
