import { Animated, StyleSheet, Text } from 'react-native';

export type Props = {
  title: string;
  height: number;
  opacity: Animated.Value;
};

const StickyHeaderPresenter: React.FC<Props> = ({ title, height, opacity }) => {
  return (
    <Animated.View style={[styles.header, { opacity }]}>
      <Text style={[styles.title, { height, lineHeight: height }]}>{title}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StickyHeaderPresenter;
