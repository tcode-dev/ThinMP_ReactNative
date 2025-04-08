import FavoriteArtistButtonPresenter from './FavoriteArtistButtonPresenter';
import { useIsFavoriteArtistStore } from '@/store/isFavoriteArtistStore';

const FavoriteArtistButtonContainer = () => {
  const { state, toggle } = useIsFavoriteArtistStore();

  return <FavoriteArtistButtonPresenter isFavorite={state} onPress={toggle} />;
};

export default FavoriteArtistButtonContainer;
