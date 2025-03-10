import { Style } from '@/constants/Style';
import { Dimensions } from 'react-native';

export const useGridSize = () => {
  const width = Dimensions.get('window').width;
  const gridCount = Math.max(Math.floor(width / Style.baseGridSize), Style.minGridCount);
  const itemWidth = (width - Style.gridPadding) / gridCount;
  const imageWidth = itemWidth - Style.gridPadding;

  return { itemWidth, imageWidth };
};
