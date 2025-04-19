import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const PlaylistsMenuButtonContainer = () => {
  const list = [{ category: ContextMenuCategory.PlaylistsEdit }];

  return <MenuButton list={list} />;
};

export default PlaylistsMenuButtonContainer;
