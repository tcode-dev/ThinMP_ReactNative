import { Platform } from 'react-native';
import MenuButtonPresenter, { Props } from './MenuButtonPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { getHeaderHeight, Style } from '@/constants/Style';

const MenuButtonContainer: React.FC<Pick<Props, 'list'>> = ({list}) => {
  const color = useThemeColor();
  const height = Platform.select({
    android: getHeaderHeight(),
    ios: Style.rowHeight,
    default: Style.rowHeight,
  });

  return <MenuButtonPresenter color={color.icon} height={height} list={list} />;
};

export default MenuButtonContainer;
