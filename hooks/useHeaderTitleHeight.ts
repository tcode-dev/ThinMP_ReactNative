import Constants from 'expo-constants';
import { useHeaderHeight } from '@react-navigation/elements';

export const useHeaderTitleHeight = () => {
  const headerHeight = useHeaderHeight();
  const statusBarHeight = Constants.statusBarHeight;
  const titleHeight = headerHeight - statusBarHeight;

  return titleHeight;
};
