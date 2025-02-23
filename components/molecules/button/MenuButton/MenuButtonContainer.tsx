import MenuButtonPresenter, { Props } from './MenuButtonPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const MenuButtonContainer: React.FC<Pick<Props, 'list'>> = ({list}) => {
  const color = useThemeColor();

  return <MenuButtonPresenter color={color.icon} list={list} />;
};

export default MenuButtonContainer;
