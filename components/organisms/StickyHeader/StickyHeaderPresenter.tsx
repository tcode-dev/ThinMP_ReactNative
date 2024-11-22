import { Animated } from 'react-native';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';

export type Props = {
  title: string;
  height: number;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, height, opacity }) => {
  return (
    <Animated.View style={{ height: height, width: '100%', opacity }}>
      <CustomHeaderBackground title={title} height={height} />
    </Animated.View>
  );
};

export default StickyHeaderPresenter;
