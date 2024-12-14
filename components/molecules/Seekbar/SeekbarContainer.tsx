import Audio from 'audio';
import SeekbarPresenter from './SeekbarPresenter';

const SeekbarContainer = () => {
  const onPress = () => {
    // Audio.setShuffle();
  };

  return <SeekbarPresenter onPress={onPress} />;
};

export default SeekbarContainer;
