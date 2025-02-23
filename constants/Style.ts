import Constants from 'expo-constants';

export const Style = {
  rowHeight: 50,
  headerHorizontalPadding: 16,
};

export const getHeaderHeight = (): number => Style.rowHeight + Constants.statusBarHeight;
