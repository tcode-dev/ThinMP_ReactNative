import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';
import { useNavigate } from '@/hooks/useNavigate';

type Props = Omit<AlbumListItemPresenterProps, 'href' | 'onPress' | 'builders'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const { navigate } = useNavigate('/albums/', props.id);
  const shortcutBuilder = useShortcutBuilder(props.id, ShortcutCategory.Album);
  const builders = [shortcutBuilder];

  return <AlbumListItemPresenter {...props} builders={builders} onPress={navigate} />;
};

export default AlbumListItemContainer;
