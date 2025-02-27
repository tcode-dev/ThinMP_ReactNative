import MenuButtonPresenter, { Props as MenuButtonPresenterProps } from './MenuButtonPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = { height?: number; right?: number; } & Pick<MenuButtonPresenterProps, 'list'>;

const MenuButtonContainer: React.FC<Props> = ({ list }) => {
  const color = useThemeColor();

  return <MenuButtonPresenter color={color.icon} list={list} />;
};

export default MenuButtonContainer;
