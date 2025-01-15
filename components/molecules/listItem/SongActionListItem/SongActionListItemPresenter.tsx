import { View, TouchableOpacity } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import SongContextMenu from '@/components/molecules/contextMenu/SongContextMenu';
import { Play } from '@/type/Audio';
import { SongProps } from 'audio';

export type Props = {
  index: number;
  borderBottomColor: string;
  play: Play;
} & SongProps;

const SongActionListItemPresenter: React.FC<Props> = ({ index, name, artistName, imageId, borderBottomColor, play }) => (
  <SongContextMenu>
    <TouchableOpacity style={[styles.container, { borderBottomColor }]} onPress={() => play(index)}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </TouchableOpacity>
  </SongContextMenu>
);


export default SongActionListItemPresenter;
