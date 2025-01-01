import { useCallback } from 'react';

import Audio, { ShuffleMode } from 'audio';

import ShuffleButtonPresenter from './ShuffleButtonPresenter';

const ShuffleButtonContainer = () => {
  const onPress = useCallback(() => {
    Audio.setShuffle(ShuffleMode.On);
  }, []);

  return <ShuffleButtonPresenter onPress={onPress} />;
};

export default ShuffleButtonContainer;
