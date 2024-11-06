import { View, StyleSheet } from 'react-native';
import { SongProps as SongProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText, SecondaryText } from '@/components/atoms/Text';

const SongListItemPresenter: React.FC<SongProps> = ({ name, artistName, imageId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
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
