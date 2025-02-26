import { Animated, StyleSheet } from 'react-native';
import Header from '@/components/molecules/header/Header';
import { getHeaderHeight } from '@/constants/Style';

export type Props = {
  title: string;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, opacity }) => (
  <Animated.View style={[styles.container, { opacity }]}>
    <Header title={title} />
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    height: getHeaderHeight(),
    width: '100%',
  },
});

export default StickyHeaderPresenter;
