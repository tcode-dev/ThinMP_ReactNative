import { View, StyleSheet } from 'react-native';
import ArtistList from '@/components/organisms/ArtistList';

const ArtistsTemplatePresenter = () => {
  return (
    <View style={styles.container}>
      <ArtistList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArtistsTemplatePresenter;
