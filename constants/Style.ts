import Constants from 'expo-constants';

export const Style = {
  rowHeight: 50,
  headerHorizontalPadding: 16,
  baseGridSize: 200,
  minGridCount: 2,
  gridPadding: 20,
};

export const getHeaderHeight = (): number => Style.rowHeight + Constants.statusBarHeight;
