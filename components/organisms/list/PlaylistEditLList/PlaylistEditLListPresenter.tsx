import DraggableFlatList from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PlaylistEditListItem from '@/components/molecules/listItem/PlaylistEditListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  playlists: PlaylistModel[];
  onDragEnd: (data: PlaylistModel[]) => void;
};

const PlaylistEditListPresenter: React.FC<Props> = ({ playlists, onDragEnd }) => (
  <GestureHandlerRootView>
    <DraggableFlatList
      data={playlists}
      renderItem={({ item, drag }) => <PlaylistEditListItem {...item} drag={drag} />}
      keyExtractor={(item) => item.id.toString()}
      onDragEnd={({ data }) => onDragEnd(data)}
    />
  </GestureHandlerRootView>
);

export default PlaylistEditListPresenter;
