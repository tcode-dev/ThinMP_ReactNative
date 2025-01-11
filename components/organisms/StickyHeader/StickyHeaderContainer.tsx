import { useFocusEffect, useNavigation } from 'expo-router';
import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import StickyHeaderPresenter, { Props as StickyHeaderPresenterProps } from './StickyHeaderPresenter';

export type Props = {
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<StickyHeaderPresenterProps, 'title'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, scrollY, endPoint }) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerBackground: () => <StickyHeaderPresenter title={title} opacity={fadeAnim} />,
      });

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

  return null;
};

export default StickyHeaderContainer;
