import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Style = {
  rowHeight: 50,
};

export const getHeaderHeight = (): number => Style.rowHeight + Constants.statusBarHeight;
