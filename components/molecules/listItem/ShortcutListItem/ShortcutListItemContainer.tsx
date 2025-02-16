import ShortcutListItemPresenter, { Props as ShortcutListItemPresenterProps } from './ShortcutListItemPresenter';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';
import { useNavigate } from '@/hooks/useNavigate';

type Props = Omit<ShortcutListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'borderRadius'>;

const ShortcutListItemContainer: React.FC<Props> = (props) => {
  const path = props.category === ShortcutCategory.Artist ? 'artists' : props.category === ShortcutCategory.Album ? 'albums' : props.category === ShortcutCategory.Playlist ? 'playlists' : '';
  const { navigate } = useNavigate(`/${path}/`, props.id);
  const shortcutBuilder = useShortcutBuilder(props.id, props.category);
  const builders = [shortcutBuilder];
  const borderRadius = props.category === ShortcutCategory.Artist ? props.imageWidth / 2 : 4;

  return <ShortcutListItemPresenter {...props} borderRadius={borderRadius} builders={builders} onPress={navigate} />;
};

export default ShortcutListItemContainer;
