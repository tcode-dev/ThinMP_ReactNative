import { View, StyleSheet } from 'react-native';
import ContextMenu, { Props as ContextMenuProps } from '../../contextMenu/ContextMenu';
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
  Pick<ContextMenuProps, 'builders'>;

const ShortcutListItemPresenter: React.FC<Props> = ({ name, description, imageId, itemWidth, imageWidth, borderRadius, builders, onPress }) => (
  <ContextMenu builders={builders} onPress={onPress}>
    <View style={{ width: itemWidth, ...styles.container }}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={imageWidth} height={imageWidth} borderRadius={borderRadius} />
      </View>
      <View style={styles.text}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{description}</SecondaryText>
      </View>
    </View>
  </ContextMenu>
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
