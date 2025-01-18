import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

export type Props = {
  children: React.ReactNode;
  y: number;
  onPress: () => void;
}

const PopupMenuPresenter: React.FC<Props> = ({ children, y, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.popup, { top: y }]}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'blue',
    zIndex: 1001,
  }
});

export default PopupMenuPresenter;
