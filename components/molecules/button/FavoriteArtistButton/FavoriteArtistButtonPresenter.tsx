import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const FavoriteArtistButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <IconButton size={50} onPress={onPress}>
      <MaterialCommunityIcons name="account-outline" size={50} color="black" />
      {/* <MaterialCommunityIcons name="account" size={35} color="black" /> */}
    </IconButton>
  );
};

export default FavoriteArtistButtonPresenter;
