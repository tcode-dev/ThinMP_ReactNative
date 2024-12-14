import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

const FavoriteArtistButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="account-outline" size={35} color="black" />
      {/* <MaterialCommunityIcons name="account" size={35} color="black" /> */}
    </TouchableOpacity>
  );
};

export default FavoriteArtistButtonPresenter;
