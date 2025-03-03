import { useCallback } from 'react';
import RepeatButtonPresenter, { RepeatIcon } from './RepeatButtonPresenter';
import Audio, { RepeatMode } from 'audio';
import { useRepeatStore } from '@/store/repeatStore';

const RepeatButtonContainer = () => {
  const { state } = useRepeatStore();
  const icon = RepeatIcon[state];
  const onPress = useCallback(() => {
    Audio.setRepeat(RepeatMode.All);
  }, []);

  return <RepeatButtonPresenter icon={icon} onPress={onPress} />;
};

export default RepeatButtonContainer;
