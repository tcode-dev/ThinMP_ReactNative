import { useCallback } from 'react';
import PrevButtonPresenter from './PrevButtonPresenter';
import Audio from 'audio';

const PrevButtonContainer = () => {
  const handlePress = useCallback(() => {
    Audio.prev();
  }, []);

  return <PrevButtonPresenter onPress={handlePress} />;
};

export default PrevButtonContainer;
