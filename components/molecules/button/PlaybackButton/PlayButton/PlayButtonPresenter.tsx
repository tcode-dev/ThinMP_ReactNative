import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  onPress: () => void;
};

const PlayButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name="play" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default PlayButtonPresenter;
