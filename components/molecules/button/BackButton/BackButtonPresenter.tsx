import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export type Props = {
  color: string;
  height: number;
  onPress: () => void;
};

const BackButtonPresenter: React.FC<Props> = ({ color, height, onPress }) => (
  <View style={[styles.container, { height }]}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="arrow-back" size={24} color={color} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default BackButtonPresenter;
