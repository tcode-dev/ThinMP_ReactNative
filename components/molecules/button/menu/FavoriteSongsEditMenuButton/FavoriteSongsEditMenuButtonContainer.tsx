import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const FavoriteSongsMenuButtonContainer = () => {
  const list = [{ category: ContextMenuCategory.FavoriteSongEdit}];

  return <MenuButton list={list} />;
};

export default FavoriteSongsMenuButtonContainer;
