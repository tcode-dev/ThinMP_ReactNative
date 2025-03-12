import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const MainMenuButtonContainer = () => {
  const list = [{ category: ContextMenuCategory.MainEdit }];

  return <MenuButton list={list} height={0} right={0} />;
};

export default MainMenuButtonContainer;
