import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryText from '@/components/atoms/text/PrimaryText';
import SwipeableListItem from '@/components/molecules/listItem/SwipeableListItem';
import { ArtistModel } from '@/model/ArtistModel';

export type Props = {
  backgroundColor: string;
  borderBottomColor: string;
  iconColor: string;
  drag: () => void;
  remove: () => void;
} & ArtistModel;

const ArtistEditListItemPresenter: React.FC<Props> = ({ name, backgroundColor, borderBottomColor, iconColor, drag, remove }) => (
  <SwipeableListItem remove={remove}>
    <View style={[styles.container, { backgroundColor, borderBottomColor }]}>
    <View style={styles.text}>
      <PrimaryText>{name}</PrimaryText>
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

export default ArtistEditListItemPresenter;
