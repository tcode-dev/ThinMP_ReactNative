import { Platform } from 'react-native';
import BackButtonPresenter, { Props } from './BackButtonPresenter';
import { getHeaderHeight, Style } from '@/constants/Style';
import { useThemeColor } from '@/hooks/useThemeColor';

const BackButtonContainer: React.FC<Pick<Props, 'onPress'>> = ({ onPress }) => {
  const color = useThemeColor();
  // StatusBarを非表示にしている
  // AndroidはHeaderの高さにStatusBarの高さが含まれていない
  // iOSはHeaderの高さにStatusBarの高さが含まれている
  const height = Platform.select({
    android: getHeaderHeight(),
    ios: Style.headerTitleHeight
  })!;

  return <BackButtonPresenter color={color.icon} height={height} onPress={onPress} />;
};

export default BackButtonContainer;
