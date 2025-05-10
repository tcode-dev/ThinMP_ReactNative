import { useWindowDimensions } from 'react-native';

export const useShortestSide = () => {
  const { width, height } = useWindowDimensions();
  const shortestSide = Math.min(width, height);

  return { shortestSide };
};
