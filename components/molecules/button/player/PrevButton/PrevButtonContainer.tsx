import { useCallback } from 'react';
import PrevButtonPresenter from './PrevButtonPresenter';
import Audio from 'audio';

const PrevButtonContainer = () => {
  const onPress = useCallback(() => {
    Audio.prev();
  }, []);

  return <PrevButtonPresenter onPress={onPress} />;
};

export default PrevButtonContainer;
