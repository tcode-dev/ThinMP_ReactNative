import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const FavoriteArtistButtonPresenter: React.FC<Props> = ({ onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <MaterialCommunityIcons name="account-outline" size={50} />
    {/* <MaterialCommunityIcons name="account" size={50} /> */}
  </IconButton>
);

export default FavoriteArtistButtonPresenter;
