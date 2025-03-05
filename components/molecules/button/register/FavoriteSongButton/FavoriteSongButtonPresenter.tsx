import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  isFavorite: boolean;
  onPress: () => void;
};

const FavoriteSongButtonPresenter: React.FC<Props> = ({ isFavorite, onPress }) => (
  <IconButton size={50} onPress={onPress}>
    {isFavorite ? (
      <MaterialCommunityIcons name="cards-heart" size={40} />
    ) : (
      <MaterialCommunityIcons name="cards-heart-outline" size={40} />
    )}
  </IconButton>
);

export default FavoriteSongButtonPresenter;
