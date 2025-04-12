import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SecondaryText from '@/components/atoms/text/SecondaryText';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import SwipeableListItem from '@/components/molecules/listItem/SwipeableListItem';
import { MaterialIcons } from '@expo/vector-icons';
import { ShortcutModel } from '@/model/ShortcutModel';

export type Props = {
  backgroundColor: string;
  borderBottomColor: string;
  iconColor: string;
  borderRadius: number;
  drag: () => void;
  remove: () => void;
} & ShortcutModel;

const ShortcutEditListItemPresenter: React.FC<Props> = ({ name, description, imageId, backgroundColor, borderBottomColor, iconColor, borderRadius, drag, remove }) => (
  <SwipeableListItem remove={remove}>
    <View style={[styles.container, { backgroundColor, borderBottomColor }]}>
      <View style={styles.artwork}>
        <ArtworkImage imageId={imageId} width={40} height={40} borderRadius={borderRadius} />
      </View>
      <View style={styles.text}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{description}</SecondaryText>
      </View>
      <View style={styles.drag}>
        <TouchableOpacity onPressIn={drag}>
          <MaterialIcons name="drag-handle" size={24} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  </SwipeableListItem>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
  },
  artwork: {
    width: 50,
  },
  text: {
    flex: 1,
  },
  drag: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default ShortcutEditListItemPresenter;
