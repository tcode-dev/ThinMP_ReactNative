import { View, StyleSheet } from 'react-native';
import { LongTapContextMenu, LongTapContextMenuProps } from '../../contextMenu/ContextMenu';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { AlbumModel } from '@/model/AlbumModel';

export type Props = AlbumModel & {
  itemWidth: number;
  imageWidth: number;
  onPress: () => void;
} & Pick<LongTapContextMenuProps, 'list'>;

const AlbumListItemPresenter: React.FC<Props> = ({ name, artistName, imageId, itemWidth, imageWidth, list, onPress }) => (
  <LongTapContextMenu list={list} onPress={onPress}>
    <View style={{ width: itemWidth, ...styles.container }}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={imageWidth} height={imageWidth} borderRadius={4} />
      </View>
      <View style={styles.text}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistName}</SecondaryText>
      </View>
    </View>
  </LongTapContextMenu>
);

const styles = StyleSheet.create({
  artwork: {
    marginBottom: 5,
  },
  container: {
    padding: 10,
  },
  text: {
    alignItems: 'center',
  },
});

export default AlbumListItemPresenter;
