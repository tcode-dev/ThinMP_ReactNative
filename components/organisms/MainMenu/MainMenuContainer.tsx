import MainMenuPresenter from './MainMenuPresenter';
import localize from '@/localize';
import { useMainMenuStore } from '@/store/mainMenuStore';
import { useEffect } from 'react';

const MainMenuContainer = () => {
  const { state, loadMainMenu } = useMainMenuStore();

  useEffect(() => {
    loadMainMenu();
  }, [loadMainMenu]);

  if (!state.isReady) return;

  const list = state.value.map((item) => ({ href: `/${item}`, text: localize(item) }));

  return <MainMenuPresenter mainMenu={list} />;
};

export default MainMenuContainer;
