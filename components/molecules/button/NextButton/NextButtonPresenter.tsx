import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type Props = {
  size: number;
  onPress: () => void;
};

const NextButtonPresenter: React.FC<Props> = ({ size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name="forward-step" size={size} color="black" />
    </TouchableOpacity>
  );
};

export default NextButtonPresenter;
