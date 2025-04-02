import SwipeableListItemPresenter from './SwipeableListItemPresenter';
import { Dimensions, LayoutChangeEvent } from 'react-native';
import { useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  callback: () => void;
};

const SwipeableListItemContainer: React.FC<Props> = ({ children, callback }) => {
  const size = Dimensions.get('window').width;
  const offset = useSharedValue<number>(0);
  const width = useSharedValue<number>(0);
  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };
  const gesture = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeX;
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + size / 2,
          width.value / 2 - size / 2,
        ],
      });
    });
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <SwipeableListItemPresenter animatedStyles={animatedStyles} gesture={gesture} onLayout={onLayout}>
      {children}
    </SwipeableListItemPresenter>
  );
};

export default SwipeableListItemContainer;
