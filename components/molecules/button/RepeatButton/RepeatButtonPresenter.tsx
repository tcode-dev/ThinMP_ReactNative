import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

const RepeatButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="repeat" size={35} color="black" />
    </TouchableOpacity>
  );
};

export default RepeatButtonPresenter;
