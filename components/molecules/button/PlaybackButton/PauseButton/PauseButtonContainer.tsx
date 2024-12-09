import Audio from 'audio';
import PauseButtonPresenter from './PauseButtonPresenter';

const PauseButtonContainer = () => {
  const onPress = () => {
    Audio.pause();
  };

  return <PauseButtonPresenter onPress={onPress} />;
};

export default PauseButtonContainer;
