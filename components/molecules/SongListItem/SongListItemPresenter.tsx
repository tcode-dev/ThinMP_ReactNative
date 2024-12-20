import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SongProps } from 'audio';
import { Play } from '@/type/Audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryText, SecondaryText } from '@/components/atoms/Text';

export type Props = {
  index: number;
  borderBottomColor: string;
  play: Play;
} & SongProps;

const SongListItemPresenter: React.FC<Props> = ({ index, name, artistName, imageId, borderBottomColor, play }) => {
  return (
    <TouchableOpacity style={[styles.container, { borderBottomColor }]} onPress={() => play(index)}>
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
    borderBottomWidth: 1,
  },
  artwork: {
    marginRight: 10,
  },
});

export default SongListItemPresenter;
