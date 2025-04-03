import SwipeableListItemPresenter from './SwipeableListItemPresenter';
import { Dimensions } from 'react-native';
import { runOnJS, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  remove: () => void;
};

const SwipeableListItemContainer: React.FC<Props> = ({ children, remove }) => {
  const width = Dimensions.get('window').width;
  const offset = useSharedValue<number>(0);
  const gesture = Gesture.Pan()
    .onChange((event) => {
      if (offset.value + event.changeX < 0) {
        offset.value += event.changeX;
      }
    })
    .onFinalize((event) => {
      if (offset.value < -width * 0.5) {
        runOnJS(remove)();
      } else {
        offset.value = withDecay({
          velocity: event.velocityX,
          rubberBandEffect: true,
          clamp: [0, width],
        });
      }
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
