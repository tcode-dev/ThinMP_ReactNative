import Constants from 'expo-constants';
// import { useHeaderHeight } from '@react-navigation/native';

export const useHeaderTitleHeight = () => {
  // const headerHeight = useHeaderHeight();
  const statusBarHeight = Constants.statusBarHeight;
  const titleHeight = 100 - statusBarHeight;

  return titleHeight;
};
