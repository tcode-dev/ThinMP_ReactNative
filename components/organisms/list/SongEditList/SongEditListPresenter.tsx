import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SongEditListItem from '@/components/molecules/listItem/SongEditListItem';
import { SongModel } from '@/model/SongModel';

export type Props = {
  songs: SongModel[];
  remove: (id: string) => void;
  update: ({ data }: { data: SongModel[] }) => void;
};

const SongEditListPresenter: React.FC<Props> = ({ songs, remove, update }) => (
  <GestureHandlerRootView>
    <DraggableFlatList data={songs} renderItem={({ item, drag }) => <SongEditListItem {...item} drag={drag} remove={remove} />} keyExtractor={(item) => item.id} onDragEnd={update} />
  </GestureHandlerRootView>
);

export default SongEditListPresenter;
