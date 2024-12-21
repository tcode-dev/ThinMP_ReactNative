import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const PlaylistButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <IconButton size={50} onPress={onPress}>
      <MaterialCommunityIcons name="playlist-plus" size={50} color="black" />
    </IconButton>
  );
};

export default PlaylistButtonPresenter;
