import { useEffect } from 'react';
import RepeatButtonPresenter, { RepeatIcon } from './RepeatButtonPresenter';
import { useRepeatStore } from '@/store/repeatStore';

const RepeatButtonContainer = () => {
  const { state, loadRepeat, changeRepeat } = useRepeatStore();
  const icon = RepeatIcon[state];

  useEffect(() => {
    loadRepeat();
  }, [loadRepeat]);

  return <RepeatButtonPresenter icon={icon} onPress={changeRepeat} />;
};

export default RepeatButtonContainer;
