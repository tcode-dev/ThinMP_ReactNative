import { Animated, StyleSheet } from 'react-native';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';
import { getHeaderHeight } from '@/constants/Style';

export type Props = {
  title: string;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, opacity }) => {
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <CustomHeaderBackground title={title} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getHeaderHeight(),
  },
});

export default StickyHeaderPresenter;
