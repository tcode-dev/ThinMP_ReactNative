import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  play: () => void;
};

const PlayButtonPresenter: React.FC<Props> = ({ play }) => {
  return (
    <TouchableOpacity onPress={play}>
      <AntDesign name="caretright" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default PlayButtonPresenter;
