import * as Device from 'expo-device';
import { useWindowDimensions } from 'react-native';

export const useDevice = () => {
  const { width, height } = useWindowDimensions();
  const longestSide = Math.max(width, height);
  const shortestSide = Math.min(width, height);
  const ratio = shortestSide / longestSide;
  const isLandscape = width > height;
  const isPortrait = height >= width;
  const isTablet = Device.deviceType === Device.DeviceType.TABLET;

  return {
    width,
    height,
    longestSide,
    shortestSide,
    ratio,
    isLandscape,
    isPortrait,
    isTablet,
  };
};
