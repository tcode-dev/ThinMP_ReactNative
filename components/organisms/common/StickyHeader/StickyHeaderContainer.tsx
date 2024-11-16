import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from 'expo-router';
import StickyHeaderPresenter, { Props as StickyHeaderPresenterProps } from './StickyHeaderPresenter';
import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';

export type Props = {
  scrollY: Animated.Value;
  endPoint: number;
} & Pick<StickyHeaderPresenterProps, 'title'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, scrollY, endPoint }) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const height = useHeaderTitleHeight();

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerBackground: () => <StickyHeaderPresenter title={title} height={height} opacity={fadeAnim} />,
    });
  }, []);

  return null;
};

export default StickyHeaderContainer;
