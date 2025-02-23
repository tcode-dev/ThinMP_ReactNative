import { Platform } from 'react-native';
import MenuButtonPresenter, { Props as MenuButtonPresenterProps } from './MenuButtonPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { getHeaderHeight, Style } from '@/constants/Style';

type Props = { height?: number; right?: number; } & Pick<MenuButtonPresenterProps, 'list'>;

const MenuButtonContainer: React.FC<Props> = ({ list, height, right }) => {
  const color = useThemeColor();
  const containerHeight = height !== undefined ? height : Platform.select({
    android: getHeaderHeight(),
    ios: Style.rowHeight,
    default: Style.rowHeight,
  });
  const buttonRight = right !== undefined ? right : -Style.headerHorizontalPadding;

  return <MenuButtonPresenter color={color.icon} height={containerHeight} right={buttonRight} list={list} />;
};

export default MenuButtonContainer;
