import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const FavoriteSongsMenuButtonContainer = () => {
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.FavoriteSongEdit }];

  return <MenuButton list={list} />;
};

export default FavoriteSongsMenuButtonContainer;
