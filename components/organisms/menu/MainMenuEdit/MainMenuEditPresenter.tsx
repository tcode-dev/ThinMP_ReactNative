import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CheckBoxListItem from '@/components/molecules/listItem/CheckBoxListItem';
import { MainMenuConstant } from '@/constants/MainMenuConstant';
import { MainMenuModel } from '@/model/MainMenuModel';

type Props = {
  list: MainMenuModel[];
  borderBottomColor: string;
  iconColor: string;
  toggle: (key: MainMenuConstant) => void;
  update: ({ data }: { data: MainMenuModel[] }) => void;
};

const MainMenuEditPresenter: React.FC<Props> = ({ list, borderBottomColor, iconColor, toggle, update }) => (
  <GestureHandlerRootView>
    <DraggableFlatList
      data={list}
      renderItem={({ item, drag }) => (
        <View style={styles.listItem}>
          <CheckBoxListItem isChecked={item.visibility} onPress={() => toggle(item.item)}>
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
      onDragEnd={update}
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
