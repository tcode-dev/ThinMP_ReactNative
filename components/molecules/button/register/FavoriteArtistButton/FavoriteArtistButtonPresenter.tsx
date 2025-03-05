import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  isFavorite: boolean;
  onPress: () => void;
};

const FavoriteArtistButtonPresenter: React.FC<Props> = ({ isFavorite, onPress }) => (
  <IconButton size={50} onPress={onPress}>
    {isFavorite ? (
      <MaterialCommunityIcons name="account" size={50} />
    ) : (
      <MaterialCommunityIcons name="account-outline" size={50} />
    )}
  </IconButton>
);

export default FavoriteArtistButtonPresenter;
