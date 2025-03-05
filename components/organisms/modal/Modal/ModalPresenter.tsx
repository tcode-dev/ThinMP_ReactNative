import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

export type Props = {
  children: ReactNode;
  overlayColor: string;
  modalColor: string;
  onPress: () => void;
};

const ModalPresenter: React.FC<Props> = ({ children, overlayColor, modalColor, onPress }) => (
  <Animated.View entering={FadeIn} style={[styles.container, { backgroundColor: overlayColor }]}>
    <Pressable style={StyleSheet.absoluteFill} onPress={onPress} />
    <Animated.View entering={SlideInDown} style={[styles.modal, { backgroundColor: modalColor }]}>
      {children}
    </Animated.View>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  modal: {
    width: '80%',
    maxHeight: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

export default ModalPresenter;
