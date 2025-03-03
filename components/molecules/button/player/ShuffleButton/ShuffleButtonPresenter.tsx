import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';
import { StyleSheet } from 'react-native';
import { ShuffleMode } from 'audio';

type Props = {
  shuffleMode: ShuffleMode;
  onPress: () => void;
};

const ShuffleButtonPresenter: React.FC<Props> = ({ shuffleMode, onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <MaterialCommunityIcons name="shuffle" size={50} style={shuffleMode === ShuffleMode.On ? styles.on : styles.off} />
  </IconButton>
);

const styles = StyleSheet.create({
  on: {
    opacity: 1,
  },
  off: {
    opacity: 0.5,
  },
});

export default ShuffleButtonPresenter;
