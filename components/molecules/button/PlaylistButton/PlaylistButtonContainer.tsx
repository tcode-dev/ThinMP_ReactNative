import { useCallback } from 'react';
import PlaylistButtonPresenter from './PlaylistButtonPresenter';

const PlaylistButtonContainer = () => {
  const onPress = useCallback(() => {},[]);

  return <PlaylistButtonPresenter onPress={onPress} />;
};

export default PlaylistButtonContainer;
