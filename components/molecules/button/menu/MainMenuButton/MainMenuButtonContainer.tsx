import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const MainMenuButtonContainer = () => {
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.MainEdit }];

  return <MenuButton list={list} height={0} right={0} />;
};

export default MainMenuButtonContainer;
