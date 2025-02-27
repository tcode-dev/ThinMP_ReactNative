import { useFocusEffect, useNavigation } from 'expo-router';
import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { Props as StickyHeaderPresenterProps } from './StickyHeaderPresenter';
import Header from '@/components/molecules/header/Header';

export type Props = {
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<StickyHeaderPresenterProps, 'title'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, scrollY, endPoint }) => {
  const navigation = useNavigation();
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
        navigation.setOptions({
          headerBackground: () => null,
        });
        scrollY.removeListener(unsubscribe);
      };
    }, [endPoint, fadeAnim, navigation, scrollY, title]),
  );

  return <Header title={title} opacity={fadeAnim} />;
};

export default StickyHeaderContainer;
