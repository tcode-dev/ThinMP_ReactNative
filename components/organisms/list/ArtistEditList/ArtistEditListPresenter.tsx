import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ArtistEditListItem from '@/components/molecules/listItem/ArtistEditListItem';
import { ArtistModel } from '@/model/ArtistModel';

export type Props = {
  artists: ArtistModel[];
  remove: (id: string) => void;
  update: ({ data }: { data: ArtistModel[] }) => void;
};

const ArtistEditListPresenter: React.FC<Props> = ({ artists, remove, update }) => (
  <GestureHandlerRootView>
    <DraggableFlatList data={artists} renderItem={({ item, drag }) => <ArtistEditListItem {...item} drag={drag} remove={remove} />} keyExtractor={(item) => item.id} onDragEnd={update} />
  </GestureHandlerRootView>
);

export default ArtistEditListPresenter;
