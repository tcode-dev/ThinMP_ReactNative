import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  pause: () => void;
};

const PauseButtonPresenter: React.FC<Props> = ({ pause }) => {
  return (
    <TouchableOpacity onPress={pause}>
      <AntDesign name="pause" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default PauseButtonPresenter;
