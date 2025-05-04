import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const FavoriteArtistsMenuButtonContainer = () => {
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.FavoriteArtistEdit }];

  return <MenuButton list={list} />;
};

export default FavoriteArtistsMenuButtonContainer;
