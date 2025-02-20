import ArtistListItemPresenter from './ArtistListItemPresenter';
import { ArtistModel } from '@/model/ArtistModel';
import { useNavigate } from '@/hooks/useNavigate';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const ArtistListItemContainer: React.FC<ArtistModel> = (props) => {
  const { navigate } = useNavigate('/artists/', props.id);
  const list = [
    { category: ContextMenuCategory.ShortcutArtist, id: props.id },
    { category: ContextMenuCategory.FavoriteArtist, id: props.id },
  ];

  return <ArtistListItemPresenter {...props} list={list} onPress={navigate} />;
};

export default ArtistListItemContainer;
