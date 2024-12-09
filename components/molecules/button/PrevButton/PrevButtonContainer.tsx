import Audio from 'audio';
import PrevButtonPresenter from './PrevButtonPresenter';

const PrevButtonContainer = () => {
  const onPress = () => {
    Audio.prev();
  };

  return <PrevButtonPresenter onPress={onPress} />;
};

export default PrevButtonContainer;
