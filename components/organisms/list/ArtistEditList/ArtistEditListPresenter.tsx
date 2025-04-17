import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ArtistEditListItem from '@/components/molecules/listItem/ArtistEditListItem';
import { ArtistModel } from '@/model/ArtistModel';

export type Props = {
  artists: ArtistModel[];
  onDragEnd: (data: ArtistModel[]) => void;
};

const ArtistEditListPresenter: React.FC<Props> = ({ artists, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList data={artists} renderItem={({ item, drag }) => <ArtistEditListItem {...item} drag={drag} />} keyExtractor={(item) => item.id} onDragEnd={({ data }) => onDragEnd(data)} />
  </GestureHandlerRootView>
);

export default ArtistEditListPresenter;
