import { useCallback } from 'react';
import FavoriteSongButtonPresenter from './FavoriteSongButtonPresenter';

const FavoriteSongButtonContainer = () => {
  const onPress = useCallback(() => {}, []);

  return <FavoriteSongButtonPresenter onPress={onPress} />;
};

export default FavoriteSongButtonContainer;
