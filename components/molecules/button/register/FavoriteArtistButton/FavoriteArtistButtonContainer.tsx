import FavoriteArtistButtonPresenter from './FavoriteArtistButtonPresenter';
import { useFavoriteArtistStore } from '@/store/favoriteArtistStore';

const FavoriteArtistButtonContainer = () => {
  const { state, toggleFavoriteArtist } = useFavoriteArtistStore();

  return <FavoriteArtistButtonPresenter isFavorite={state} onPress={toggleFavoriteArtist} />;
};

export default FavoriteArtistButtonContainer;
