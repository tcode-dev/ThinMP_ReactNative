import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  onPress: () => void;
};

const PauseButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name="pause" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default PauseButtonPresenter;
