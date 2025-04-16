import ShortcutListItemPresenter, { Props as ShortcutListItemPresenterProps } from './ShortcutListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { ContextMenuCategory } from '@/store/contextMenuStore';
import { ShortcutCategory } from '@/type/Entity';

type Props = Omit<ShortcutListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'borderRadius' | 'list'>;

const ShortcutListItemContainer: React.FC<Props> = (props) => {
  const path = props.category === ShortcutCategory.Artist ? 'artists' : props.category === ShortcutCategory.Album ? 'albums' : props.category === ShortcutCategory.Playlist ? 'playlists' : '';
  const { navigate } = useNavigate(`/${path}/`, props.id);
  const category =
    props.category === ShortcutCategory.Artist
      ? ContextMenuCategory.ShortcutArtist
      : props.category === ShortcutCategory.Album
      ? ContextMenuCategory.ShortcutAlbum
      : ContextMenuCategory.ShortcutPlaylist;
  const list = [{ category, id: props.id }];

  const borderRadius = props.category === ShortcutCategory.Artist ? props.imageWidth / 2 : 4;

  return <ShortcutListItemPresenter {...props} borderRadius={borderRadius} list={list} onPress={navigate} />;
};

export default ShortcutListItemContainer;
