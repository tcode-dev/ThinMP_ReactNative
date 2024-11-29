import Audio from 'audio';
import PauseButtonPresenter from './PauseButtonPresenter';

const PauseButtonContainer = () => {
  const pause = () => {
    Audio.pause();
  }

  return <PauseButtonPresenter pause={pause} />;
};

export default PauseButtonContainer;
