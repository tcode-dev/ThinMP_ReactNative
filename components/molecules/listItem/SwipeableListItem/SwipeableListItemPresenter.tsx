import React from 'react';
import { ViewStyle } from 'react-native';
import { ComposedGesture, GestureDetector, GestureHandlerRootView, GestureType } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

type Props = {
  animatedStyles: ViewStyle;
  children: React.ReactNode;
  gesture: ComposedGesture | GestureType;
};

const SwipeableListItemPresenter: React.FC<Props> = ({ animatedStyles, children, gesture }) => (
  <GestureHandlerRootView>
    <GestureDetector gesture={gesture}>
      <Animated.View style={animatedStyles}>{children}</Animated.View>
    </GestureDetector>
  </GestureHandlerRootView>
);

export default SwipeableListItemPresenter;
