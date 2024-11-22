import Constants from "expo-constants";

export const Style = {
  headerTitleHeight: 50,
};

export const getHeaderHeight = (): number => {
  return Style.headerTitleHeight + Constants.statusBarHeight;
};
