import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  onPress: () => void;
};

const PrevButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name="backward-step" size={50} color="black" />
    </TouchableOpacity>
  );
};

export default PrevButtonPresenter;
