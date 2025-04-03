import SwipeableListItemPresenter from './SwipeableListItemPresenter';
import { Dimensions } from 'react-native';
import { useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  callback: () => void;
};

const SwipeableListItemContainer: React.FC<Props> = ({ children, callback }) => {
  const width = Dimensions.get('window').width;
  const offset = useSharedValue<number>(0);
  const gesture = Gesture.Pan()
    .onChange((event) => {
      if (offset.value + event.changeX < 0) {
        offset.value += event.changeX;
      }
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [0, width],
      });
    });
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <SwipeableListItemPresenter animatedStyles={animatedStyles} gesture={gesture}>
      {children}
    </SwipeableListItemPresenter>
  );
};

export default SwipeableListItemContainer;
