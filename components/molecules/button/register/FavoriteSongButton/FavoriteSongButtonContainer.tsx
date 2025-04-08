import FavoriteSongButtonPresenter from './FavoriteSongButtonPresenter';
import { useIsFavoriteSongStore } from '@/store/isFavoriteSongStore';

const FavoriteSongButtonContainer = () => {
  const { state, toggle } = useIsFavoriteSongStore();

  return <FavoriteSongButtonPresenter isFavorite={state} onPress={toggle} />;
};

export default FavoriteSongButtonContainer;
