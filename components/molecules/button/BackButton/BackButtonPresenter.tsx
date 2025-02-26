import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import IconButton from '../IconButton';

export type Props = {
  onPress: () => void;
};

const BackButtonPresenter: React.FC<Props> = ({ onPress }) => (
  <View style={styles.container}>
    <IconButton size={50} onPress={onPress}>
      <FontAwesome6 name="chevron-left" size={20} />
    </IconButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default BackButtonPresenter;
