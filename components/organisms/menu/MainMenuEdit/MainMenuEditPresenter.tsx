import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { MainMenuModel } from '@/model/MainMenuModel';
import CheckBoxListItem from '@/components/molecules/listItem/CheckBoxListItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  list: MainMenuModel[],
  borderBottomColor: string,
  iconColor: string,
  onPress: (item: MainMenuModel) => void,
  onDragEnd: (data: MainMenuModel[]) => void,
};

const MainMenuEditPresenter: React.FC<Props> = ({ list, borderBottomColor, iconColor, onPress, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList
      data={list}
      renderItem={({ item, drag }) => (
        <View style={styles.listItem}>
          <CheckBoxListItem isChecked={item.visibility} onPress={() => onPress(item)}>
            {item.text}
          </CheckBoxListItem>
          <View style={[styles.drag, { borderBottomColor }]}>
            <TouchableOpacity onPressIn={drag}>
              <MaterialIcons name="drag-handle" size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.item.toString()}
      onDragEnd={({ data }) => onDragEnd(data)}
    />
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drag: {
    padding: 10,
    borderBottomWidth: 1,
    height: '100%',
  },
});

export default MainMenuEditPresenter;
