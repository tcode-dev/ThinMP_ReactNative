import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PlainListItem from '../PlainListItem';
import SwipeableListItem from '@/components/molecules/listItem/SwipeableListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  backgroundColor: string;
  borderBottomColor: string;
  iconColor: string;
  drag: () => void;
  remove: () => void;
} & PlaylistModel;

const PlaylistEditListItemPresenter: React.FC<Props> = ({ name, backgroundColor, borderBottomColor, iconColor, drag, remove }) => (
  <SwipeableListItem remove={remove}>
    <View style={[styles.container, { backgroundColor, borderBottomColor }]}>
      <PlainListItem>{name}</PlainListItem>
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
  drag: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default PlaylistEditListItemPresenter;
