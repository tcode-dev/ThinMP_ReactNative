import { TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type Props = {
  buttonSize: number;
  iconSize: number;
  onPress: () => void;
};

const NextButtonPresenter: React.FC<Props> = ({ buttonSize, iconSize, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { width: buttonSize, height: buttonSize }]} onPress={onPress}>
      <FontAwesome6 style={[styles.icon, { width: iconSize, height: iconSize }]} name="forward-step" size={iconSize} color="black" />
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

export default NextButtonPresenter;
