import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';

import { useEffect } from 'react';

const MainMenuEditContainer = () => {
  const { state, loadMainMenuEdit, toggle, update } = useMainMenuEditStore();

  useEffect(() => {
    loadMainMenuEdit();
  }, [loadMainMenuEdit]);

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} onPress={toggle} onDragEnd={update} />;
};

export default MainMenuEditContainer;
