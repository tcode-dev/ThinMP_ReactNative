import { useEffect } from 'react';
import ShuffleButtonPresenter from './ShuffleButtonPresenter';
import { useShuffleStore } from '@/store/shuffleStore';

const ShuffleButtonContainer = () => {
  const { state, loadShuffle, changeShuffle } = useShuffleStore();

  useEffect(() => {
    loadShuffle();
  }, [loadShuffle]);

  return <ShuffleButtonPresenter shuffleMode={state} onPress={changeShuffle} />;
};

export default ShuffleButtonContainer;
