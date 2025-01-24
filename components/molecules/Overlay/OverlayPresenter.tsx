import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

type Props = {
  onPress: () => void;
};

const OverlayPresenter: React.FC<Props> = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container]} />
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default OverlayPresenter;
