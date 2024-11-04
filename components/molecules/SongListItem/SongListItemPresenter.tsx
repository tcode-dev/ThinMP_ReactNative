import { Text, View, StyleSheet } from 'react-native';
import { SongsProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';

const SongListItemPresenter: React.FC<SongsProps> = ({ name, artistName, imageId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{artistName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  artwork: {
    marginRight: 10,
  },
});

export default SongListItemPresenter;
