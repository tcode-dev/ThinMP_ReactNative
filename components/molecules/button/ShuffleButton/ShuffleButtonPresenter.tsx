import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

const ShuffleButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="shuffle" size={35} color="black" />
    </TouchableOpacity>
  );
};

export default ShuffleButtonPresenter;
