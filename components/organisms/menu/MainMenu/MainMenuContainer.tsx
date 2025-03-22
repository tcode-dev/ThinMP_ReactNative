import MainMenuPresenter from './MainMenuPresenter';
import { useMainMenuStore } from '@/store/mainMenuStore';
import { useEffect } from 'react';

const MainMenuContainer = () => {
  const { state, loadMainMenu } = useMainMenuStore();

  useEffect(() => {
    loadMainMenu();
  }, [loadMainMenu]);

  if (!state.isReady) return;

  return <MainMenuPresenter list={state.value} />;
};

export default MainMenuContainer;
