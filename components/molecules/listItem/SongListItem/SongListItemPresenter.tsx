import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { Play } from '@/type/Audio';
import { SongProps } from 'audio';

export type Props = {
  index: number;
  borderBottomColor: string;
  play: Play;
} & SongProps;

const SongListItemPresenter: React.FC<Props> = ({ index, name, artistName, imageId, borderBottomColor, play }) => (
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

const styles = StyleSheet.create({
  artwork: {
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
  },
});

export default SongListItemPresenter;
