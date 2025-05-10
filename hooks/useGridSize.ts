import { useWindowDimensions } from 'react-native';
import { Style } from '@/constants/Style';

export const useGridSize = () => {
  const { width } = useWindowDimensions();
  const gridCount = Math.max(Math.floor(width / Style.baseGridSize), Style.minGridCount);
  const itemWidth = (width - Style.gridPadding) / gridCount;
  const imageWidth = itemWidth - Style.gridPadding;

  return { itemWidth, imageWidth, gridCount };
};
