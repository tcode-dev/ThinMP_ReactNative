import Constants from 'expo-constants';

export const Style = {
  headerTitleHeight: 50,
};

export const getHeaderHeight = (): number => Style.headerTitleHeight + Constants.statusBarHeight;
