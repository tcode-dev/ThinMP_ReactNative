import { FlatList } from 'react-native';
import PlaylistListItem from '@/components/molecules/listItem/PlaylistListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

type Props = {
  playlists: PlaylistModel[];
};

const PlaylistListPresenter: React.FC<Props> = ({ playlists }) => <FlatList data={playlists} scrollEnabled={false} renderItem={({ item }) => <PlaylistListItem {...item} />} />;

export default PlaylistListPresenter;
