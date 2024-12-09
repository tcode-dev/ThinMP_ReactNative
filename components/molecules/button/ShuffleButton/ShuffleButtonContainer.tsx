import Audio from 'audio';
import ShuffleButtonPresenter from './ShuffleButtonPresenter';

const ShuffleButtonContainer = () => {
  const onPress = () => {
    // Audio.setShuffle();
  };

  return <ShuffleButtonPresenter onPress={onPress} />;
};

export default ShuffleButtonContainer;
