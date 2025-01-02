import { useCallback } from 'react';
import RepeatButtonPresenter from './RepeatButtonPresenter';
import Audio, { RepeatMode } from 'audio';


const RepeatButtonContainer = () => {
  const onPress = useCallback(() => {
    Audio.setRepeat(RepeatMode.All);
  }, []);

  return <RepeatButtonPresenter onPress={onPress} />;
};

export default RepeatButtonContainer;
