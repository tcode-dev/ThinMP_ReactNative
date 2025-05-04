import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const FavoriteArtistsMenuButtonContainer = () => {
  const list = [{ category: ContextMenuCategory.FavoriteArtistEdit }];

  return <MenuButton list={list} />;
};

export default FavoriteArtistsMenuButtonContainer;
