import { useCallback } from 'react';
import FavoriteArtistButtonPresenter from './FavoriteArtistButtonPresenter';

const FavoriteArtistButtonContainer = () => {
  const onPress = useCallback(() => {}, []);

  return <FavoriteArtistButtonPresenter onPress={onPress} />;
};

export default FavoriteArtistButtonContainer;
