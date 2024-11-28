import Audio from 'audio';
import PlayButtonPresenter from './PlayButtonPresenter';

const PlayButtonContainer = () => {
  const play = () => {
    Audio.play();
  }

  return <PlayButtonPresenter play={play} />;
};

export default PlayButtonContainer;
