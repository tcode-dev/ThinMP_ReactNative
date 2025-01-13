import { Platform } from 'react-native';
import BackButtonPresenter, { Props } from './BackButtonPresenter';
import { getHeaderHeight, Style } from '@/constants/Style';

const BackButtonContainer: React.FC<Pick<Props, 'onPress'>> = ({ onPress }) => {
  // StatusBarを非表示にしている
  // AndroidはHeaderの高さにStatusBarの高さが含まれていない
  // iOSはHeaderの高さにStatusBarの高さが含まれている
  const height = Platform.select({
    android: getHeaderHeight(),
    ios: Style.headerTitleHeight,
    default: Style.headerTitleHeight,
  });

  return <BackButtonPresenter height={height} onPress={onPress} />;
};

export default BackButtonContainer;
