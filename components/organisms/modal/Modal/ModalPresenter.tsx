import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

export type Props = {
  children: ReactNode;
  onPress: () => void;
};

const ModalPresenter: React.FC<Props> = ({ children, onPress }) => (
  <Animated.View entering={FadeIn} style={styles.container}  >
    <Pressable style={StyleSheet.absoluteFill} onPress={onPress} />
    <Animated.View entering={SlideInDown} style={styles.modal}>
      {children}
    </Animated.View>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  modal: {
    width: '80%',
    maxHeight: '80%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
  },
});

export default ModalPresenter;