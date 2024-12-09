import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  onPress: () => void;
};

const NextButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name="forward-step" size={48} color="black" />
    </TouchableOpacity>
  );
};

export default NextButtonPresenter;
