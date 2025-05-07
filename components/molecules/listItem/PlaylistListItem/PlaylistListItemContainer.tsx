import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { PlaylistModel } from '@/model/PlaylistModel';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = String(props.id);
  const { navigate } = useNavigate('/playlists/', playlistId);
  const list: ContextMenuProps[] = [
    { category: ContextMenuCategory.ShortcutPlaylist, id: playlistId },
    { category: ContextMenuCategory.PlaylistRemove, id: props.id },
  ];

  return <PlaylistListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default PlaylistListItemContainer;
