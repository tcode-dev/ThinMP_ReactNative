import { Dimensions } from 'react-native';

export const useSize = () => {
  const scaledSize = Dimensions.get('window');
  const width = scaledSize.width;
  const height = scaledSize.height;
  const shortestSide = Math.min(width, height);

  return { width, height, shortestSide };
};
