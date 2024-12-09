import Audio from 'audio';
import RepeatButtonPresenter from './RepeatButtonPresenter';

const RepeatButtonContainer = () => {
  const onPress = () => {
    // Audio.setRepeat();
  };

  return <RepeatButtonPresenter onPress={onPress} />;
};

export default RepeatButtonContainer;
