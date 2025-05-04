import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const PlaylistsMenuButtonContainer = () => {
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.PlaylistsEdit }];

  return <MenuButton list={list} />;
};

export default PlaylistsMenuButtonContainer;
