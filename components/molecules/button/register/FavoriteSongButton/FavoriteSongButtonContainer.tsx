import FavoriteSongButtonPresenter from './FavoriteSongButtonPresenter';
import { useFavoriteSongStore } from '@/store/favoriteSongStore';

const FavoriteSongButtonContainer = () => {
  const { state, toggleFavoriteSong } = useFavoriteSongStore();

  return <FavoriteSongButtonPresenter isFavorite={state} onPress={toggleFavoriteSong} />;
};

export default FavoriteSongButtonContainer;
