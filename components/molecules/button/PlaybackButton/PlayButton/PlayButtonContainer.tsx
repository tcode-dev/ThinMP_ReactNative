import Audio from 'audio';
import PlayButtonPresenter from './PlayButtonPresenter';

const PlayButtonContainer = () => {
  const onPress = () => {
    Audio.play();
  };

  return <PlayButtonPresenter onPress={onPress} />;
};

export default PlayButtonContainer;
