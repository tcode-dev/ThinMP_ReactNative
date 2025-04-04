import { SongModel } from '@/model/SongModel';
import SongEditListItem from '@/components/molecules/listItem/SongEditListItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type Props = {
  songs: SongModel[];
  onDragEnd: (data: SongModel[]) => void;
};

const SongEditListPresenter: React.FC<Props> = ({ songs, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList
      data={songs}
      renderItem={({ item, drag }) => (
        <SongEditListItem {...item} drag={drag} />
      )}
      keyExtractor={(item) => item.id.toString()}
      onDragEnd={({ data }) => onDragEnd(data)}
    />
  </GestureHandlerRootView>
);

export default SongEditListPresenter;
