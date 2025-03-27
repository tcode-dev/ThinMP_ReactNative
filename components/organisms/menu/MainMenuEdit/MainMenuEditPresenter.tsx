import { TouchableOpacity } from 'react-native';
import { MainMenuModel } from '@/model/MainMenuModel';
import CheckBoxListItem from '@/components/molecules/listItem/CheckBoxListItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  list: MainMenuModel[],
  onPress: (item: MainMenuModel) => void,
  onDragEnd: (data: MainMenuModel[]) => void,
};

const MainMenuEditPresenter: React.FC<Props> = ({ list, onPress, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList
      data={list}
      renderItem={({ item, drag }) => (
        <TouchableOpacity onLongPress={drag}>
          <CheckBoxListItem isChecked={item.visibility} onPress={() => onPress(item)}>{item.text}</CheckBoxListItem>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.item.toString()}
      onDragEnd={({ data }) => onDragEnd(data)}
    />
  </GestureHandlerRootView>
);

export default MainMenuEditPresenter;
