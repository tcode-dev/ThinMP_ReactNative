import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type Props = {
  name: 'play' | 'pause';
  size: number;
  onPress: () => void;
};

const PlaybackButtonPresenter: React.FC<Props> = ({ name, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome6 name={name} size={size} color="black" />
    </TouchableOpacity>
  );
};

export default PlaybackButtonPresenter;
