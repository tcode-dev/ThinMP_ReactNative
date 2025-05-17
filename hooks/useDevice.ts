import * as Device from 'expo-device';
import { useWindowDimensions } from 'react-native';

export const useDevice = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isPortrait = height >= width;
  const isTablet = Device.deviceType === Device.DeviceType.TABLET;
  const longestSide = Math.max(width, height);
  const shortestSide = Math.min(width, height);
  const ratio = shortestSide / longestSide;

  return { 
    isLandscape,
    isPortrait,
    isTablet,
    longestSide,
    ratio,
    shortestSide,
    width,
    height,
   };
};
