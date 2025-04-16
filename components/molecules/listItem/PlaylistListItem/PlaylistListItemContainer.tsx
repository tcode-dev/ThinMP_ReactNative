import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { PlaylistModel } from '@/model/PlaylistModel';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = props.id as unknown as string;
  const { navigate } = useNavigate('/playlists/', String(props.id));
  const list = [{ category: ContextMenuCategory.ShortcutPlaylist, id: playlistId }];

  return <PlaylistListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default PlaylistListItemContainer;
