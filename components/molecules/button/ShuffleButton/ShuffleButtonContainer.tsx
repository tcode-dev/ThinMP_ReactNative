import { useCallback } from 'react';
import ShuffleButtonPresenter from './ShuffleButtonPresenter';
import Audio, { ShuffleMode } from 'audio';

const ShuffleButtonContainer = () => {
  const onPress = useCallback(() => {
    Audio.setShuffle(ShuffleMode.On);
  }, []);

  return <ShuffleButtonPresenter onPress={onPress} />;
};

export default ShuffleButtonContainer;
