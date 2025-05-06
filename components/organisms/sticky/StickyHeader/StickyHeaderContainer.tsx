import { useFocusEffect } from 'expo-router';
import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import Header, { Props as HeaderProps } from '@/components/molecules/header/Header';

export type Props = {
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<HeaderProps, 'title' | 'menu'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, menu, scrollY, endPoint }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = scrollY.addListener(({ value }) => {
        if (value > endPoint) {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }).start();
        }
      });

      return () => {
        scrollY.removeListener(unsubscribe);
      };
    }, [endPoint, fadeAnim, scrollY])
  );

  return <Header title={title} menu={menu} opacity={fadeAnim} />;
};

export default StickyHeaderContainer;
