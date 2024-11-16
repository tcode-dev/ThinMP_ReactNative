import { Dimensions } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

export const useStickyHeaderEndPoint = (position: number) => {
  const headerHeight = useHeaderHeight();
  const width = Dimensions.get('window').width;
  const endPoint = width - headerHeight - position;

  return endPoint;
};
