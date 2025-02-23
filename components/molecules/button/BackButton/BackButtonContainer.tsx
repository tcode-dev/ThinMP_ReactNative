import { Platform } from 'react-native';
import BackButtonPresenter, { Props } from './BackButtonPresenter';
import { getHeaderHeight, Style } from '@/constants/Style';
import { useCallback } from 'react';
import { router } from 'expo-router';

const BackButtonContainer = () => {
  // StatusBarを非表示にしている
  // AndroidはHeaderの高さにStatusBarの高さが含まれていない
  // iOSはHeaderの高さにStatusBarの高さが含まれている
  const height = Platform.select({
    android: getHeaderHeight(),
    ios: Style.rowHeight,
    default: Style.rowHeight,
  });
  const onPress = useCallback(() => {
    router.back();
  }, []);

  return <BackButtonPresenter height={height} onPress={onPress} />;
};

export default BackButtonContainer;
