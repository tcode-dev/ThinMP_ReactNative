import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SongProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText, SecondaryText } from '@/components/atoms/Text';

export type Props = {
  index: number;
  play: (index: number) => void;
} & SongProps;

const SongListItemPresenter: React.FC<Props> = ({ index, name, artistName, imageId, play }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => play(index)}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </TouchableOpacity>
  );
};

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
