import { useEffect, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import StickyHeaderPresenter, { Props as StickyHeaderPresenterProps, TITLE_BOTTOM_POSITION } from './StickyHeaderPresenter';

type Props = { scrollY: Animated.Value; } & Pick<StickyHeaderPresenterProps, 'title'>;

const StickyHeaderContainer: React.FC<Props> = ({ title, scrollY }) => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const width = Dimensions.get('window').width;
  const statusBarHeight = Constants.statusBarHeight;
  const titleHeight = headerHeight - statusBarHeight;
  const titlePosition = width - TITLE_BOTTOM_POSITION - headerHeight;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = scrollY.addListener(({ value }) => {
      if (value > titlePosition) {
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
      headerBackground: () => (
        <StickyHeaderPresenter title={title} height={titleHeight} opacity={fadeAnim} />
      ),
    });
  }, []);

  return null;
};

export default StickyHeaderContainer;
