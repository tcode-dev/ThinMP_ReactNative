import { View, StyleSheet } from 'react-native';
import AlbumList from '@/components/organisms/common/AlbumList';

const AlbumsTemplatePresenter = () => {
  return (
    <View style={styles.container}>
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AlbumsTemplatePresenter;
