import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import IconButton from '../IconButton';
import { Style } from '@/constants/Style';

export type Props = {
  height: number;
  onPress: () => void;
};

const BackButtonPresenter: React.FC<Props> = ({ height, onPress }) => (
  <View style={[styles.container, { height }]}>
    <View style={[styles.button]}>
      <IconButton size={50} onPress={onPress}>
        <FontAwesome6 name="chevron-left" size={20} />
      </IconButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    left: -Style.headerHorizontalPadding,
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default BackButtonPresenter;
