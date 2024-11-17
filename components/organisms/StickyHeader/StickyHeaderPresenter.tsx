import { Animated } from 'react-native';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';

export type Props = {
  title: string;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, opacity }) => {
  return (
    <Animated.View style={{ height: '100%', width: '100%', opacity }}>
      <CustomHeaderBackground title={title} />
    </Animated.View>
  );
};

export default StickyHeaderPresenter;
