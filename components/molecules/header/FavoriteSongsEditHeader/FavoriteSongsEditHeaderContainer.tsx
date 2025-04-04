import EditHeader from '../EditHeader';
import { useCallback } from 'react';

const FavoriteSongsEditHeaderContainer = () => {
  const done = useCallback(() => {
  }, []);

  return <EditHeader done={done} />;
};

export default FavoriteSongsEditHeaderContainer;
