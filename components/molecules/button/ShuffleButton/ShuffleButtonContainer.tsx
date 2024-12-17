import Audio, { ShuffleMode } from 'audio';
import ShuffleButtonPresenter from './ShuffleButtonPresenter';

const ShuffleButtonContainer = () => {
  const onPress = () => {
    Audio.setShuffle(ShuffleMode.On);
  };

  return <ShuffleButtonPresenter onPress={onPress} />;
};

export default ShuffleButtonContainer;
