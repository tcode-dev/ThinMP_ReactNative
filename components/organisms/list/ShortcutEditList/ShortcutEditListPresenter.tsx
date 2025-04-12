import ShortcutEditListItem from '@/components/molecules/listItem/ShortcutEditListItem';
import { ShortcutModel } from '@/model/ShortcutModel';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type Props = {
  shortcuts: ShortcutModel[];
  onDragEnd: (data: ShortcutModel[]) => void;
};

const ShortcutEditListPresenter: React.FC<Props> = ({ shortcuts, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList data={shortcuts} renderItem={({ item, drag }) => <ShortcutEditListItem {...item} drag={drag} />} keyExtractor={(item) => item.id} onDragEnd={({ data }) => onDragEnd(data)} />
  </GestureHandlerRootView>
);

export default ShortcutEditListPresenter;
