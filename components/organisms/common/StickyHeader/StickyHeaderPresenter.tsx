import { Animated, StyleSheet } from 'react-native';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';

export type Props = {
  title: string;
  height: number;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, height, opacity }) => {
  return (
    <Animated.View style={[styles.header, { opacity }]}>
      <PrimaryTitle style={[{ height, lineHeight: height }]}>{title}</PrimaryTitle>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default StickyHeaderPresenter;
