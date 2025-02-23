import { View, StyleSheet } from 'react-native';
import LongTapContextMenu, { LongTapContextMenuProps } from '@/components/molecules/contextMenu/LongTapContextMenu';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { ShortcutModel } from '@/model/ShortcutModel';

export type Props = {
  itemWidth: number;
  imageWidth: number;
  borderRadius: number;
  onPress: () => void;
} & ShortcutModel &
  Pick<LongTapContextMenuProps, 'list'>;

const ShortcutListItemPresenter: React.FC<Props> = ({ name, description, imageId, itemWidth, imageWidth, borderRadius, list, onPress }) => (
  <LongTapContextMenu list={list} onPress={onPress}>
    <View style={{ width: itemWidth, ...styles.container }}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={imageWidth} height={imageWidth} borderRadius={borderRadius} />
      </View>
      <View style={styles.text}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{description}</SecondaryText>
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

export default ShortcutListItemPresenter;
