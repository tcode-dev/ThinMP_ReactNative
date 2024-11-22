import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { useFocusEffect, useNavigation } from 'expo-router';
import Constants from 'expo-constants';
import { Style } from '@/constants/Style';
import StickyHeaderPresenter, { Props as StickyHeaderPresenterProps } from './StickyHeaderPresenter';

export type Props = {
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<StickyHeaderPresenterProps, 'title'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, scrollY, endPoint }) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const height = Style.headerTitleHeight + Constants.statusBarHeight;

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerBackground: () => <StickyHeaderPresenter title={title} height={height} opacity={fadeAnim} />,
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
    }, [])
  );

  return null;
};

export default StickyHeaderContainer;
