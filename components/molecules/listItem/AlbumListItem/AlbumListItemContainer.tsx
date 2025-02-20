import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { ContextMenuCategory } from '@/store/contextMenuStore';

type Props = Omit<AlbumListItemPresenterProps, 'href' | 'onPress' | 'builders'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const { navigate } = useNavigate('/albums/', props.id);
  const list = [{ category: ContextMenuCategory.ShortcutAlbum, id: props.id}];

  return <AlbumListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default AlbumListItemContainer;
