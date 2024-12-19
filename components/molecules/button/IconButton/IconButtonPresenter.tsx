import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { ReactElement } from 'react';

export type Props = {
  children: ReactElement;
  size: number;
  onPress: () => void;
};

const IconButtonPresenter: React.FC<Props> = ({ children, size, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { width: size, height: size }]} onPress={onPress}>
      {React.cloneElement(children, {
        style: [children.props.style, styles.icon],
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default IconButtonPresenter;
