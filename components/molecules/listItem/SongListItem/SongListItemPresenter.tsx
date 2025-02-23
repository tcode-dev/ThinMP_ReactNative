import { View, StyleSheet } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import LongTapContextMenu, { LongTapContextMenuProps } from '@/components/molecules/contextMenu/LongTapContextMenu';
import { SongModel } from '@/model/SongModel';

export type Props = {
  borderBottomColor: string;
  onPress: () => void;
} & SongModel &
  Pick<LongTapContextMenuProps, 'list'>;

const SongListItemPresenter: React.FC<Props> = ({ name, artistName, imageId, borderBottomColor, list, onPress }) => (
  <LongTapContextMenu list={list} onPress={onPress}>
    <View style={[styles.container, { borderBottomColor }]}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={4} />
      </View>
      <View>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </View>
  </LongTapContextMenu>
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
