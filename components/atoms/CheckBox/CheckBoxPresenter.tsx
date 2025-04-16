import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
  isChecked: boolean;
  color: string;
  onPress: () => void;
};

const CheckBoxPresenter: React.FC<Props> = ({ isChecked, color, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {isChecked ? <FontAwesome6 name="square-check" size={24} color={color} /> : <FontAwesome6 name="square" size={24} color={color} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default CheckBoxPresenter;
