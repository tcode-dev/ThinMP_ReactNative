import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import { PlaylistModel } from '@/model/PlaylistModel';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';
import { useNavigate } from '@/hooks/useNavigate';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = props.id as unknown as string;
  const { navigate } = useNavigate('/playlists/', String(props.id));
  const shortcutBuilder = useShortcutBuilder(playlistId, ShortcutCategory.Playlist);
  const builders = [shortcutBuilder];

  return <PlaylistListItemPresenter {...props} builders={builders} onPress={navigate} />;
};

export default PlaylistListItemContainer;
