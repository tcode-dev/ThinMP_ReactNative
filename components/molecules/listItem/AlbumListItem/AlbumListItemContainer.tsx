import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

type Props = Omit<AlbumListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'list'> & {
  isUpdate?: boolean;
};

const AlbumListItemContainer: React.FC<Props> = ({isUpdate, ...props}) => {
  const { navigate } = useNavigate('/albums/', props.id);
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.ShortcutAlbum, id: props.id, isUpdate }];

  return <AlbumListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default AlbumListItemContainer;
