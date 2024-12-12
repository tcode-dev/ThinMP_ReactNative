import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

const FavoriteSongButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="cards-heart-outline" size={35} color="black" />
      {/* <MaterialCommunityIcons name="cards-heart" size={35} color="black" /> */}
    </TouchableOpacity>
  );
};

export default FavoriteSongButtonPresenter;
