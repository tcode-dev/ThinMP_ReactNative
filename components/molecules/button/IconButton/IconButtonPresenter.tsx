import { ReactElement, cloneElement } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
  children: ReactElement;
  size: number;
  color: string;
  onPress: () => void;
};

const IconButtonPresenter: React.FC<Props> = ({ children, size, color, onPress }) => (
  <TouchableOpacity style={[styles.container, { width: size, height: size }]} onPress={onPress}>
    {cloneElement(children, {
      style: [children.props.style, styles.icon],
      color,
    })}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default IconButtonPresenter;
