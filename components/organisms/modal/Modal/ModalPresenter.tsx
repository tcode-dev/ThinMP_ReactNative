import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

export type Props = {
  children: ReactNode;
};

const Modal: React.FC<Props> = ({children}) => (
  <Animated.View
    entering={FadeIn}
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000040',
    }}
  >
    <Pressable style={StyleSheet.absoluteFill} onPress={() => {}} />
    <Animated.View
      entering={SlideInDown}
      style={{
        width: '90%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      {children}
    </Animated.View>
  </Animated.View>
);

export default Modal;