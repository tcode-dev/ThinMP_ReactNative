import Audio, { RepeatMode } from 'audio';
import RepeatButtonPresenter from './RepeatButtonPresenter';

const RepeatButtonContainer = () => {
  const onPress = () => {
    Audio.setRepeat(RepeatMode.All);
  };

  return <RepeatButtonPresenter onPress={onPress} />;
};

export default RepeatButtonContainer;
