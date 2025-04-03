import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { ComposedGesture, GestureDetector, GestureHandlerRootView, GestureType } from 'react-native-gesture-handler';

type Props = {
  animatedStyles: ViewStyle;
  children: React.ReactNode;
  gesture: ComposedGesture | GestureType;
}

const SwipeableListItemPresenter: React.FC<Props> = ({ animatedStyles, children, gesture }) => (
  <GestureHandlerRootView style={styles.container}>
    <View style={styles.wrapper}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.box, animatedStyles]}>{children}</Animated.View>
      </GestureDetector>
    </View>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    width: '100%',
    backgroundColor: '#b58df1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwipeableListItemPresenter;