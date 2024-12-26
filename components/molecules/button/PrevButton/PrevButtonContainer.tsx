import { useCallback } from 'react';
import Audio from 'audio';
import PrevButtonPresenter from './PrevButtonPresenter';

const PrevButtonContainer = () => {
  const onPress = useCallback(() => {
    Audio.prev();
  }, []);

  return <PrevButtonPresenter onPress={onPress} />;
};

export default PrevButtonContainer;
