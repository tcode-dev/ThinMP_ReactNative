import ArtistListItemPresenter from './ArtistListItemPresenter';
import { useNavigate } from '@/hooks/useNavigate';
import { ArtistModel } from '@/model/ArtistModel';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

type Props = ArtistModel & {
  isUpdate?: boolean;
};

const ArtistListItemContainer: React.FC<Props> = ({ isUpdate, ...props }) => {
  const { navigate } = useNavigate('/artists/', props.id);
  const list: ContextMenuProps[] = [
    { category: ContextMenuCategory.ShortcutArtist, id: props.id, isUpdate },
    { category: ContextMenuCategory.FavoriteArtist, id: props.id, isUpdate },
  ];

  return <ArtistListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default ArtistListItemContainer;
