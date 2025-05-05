import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import MainMenuPresenter from './MainMenuPresenter';
import { useMainMenuStore } from '@/store/mainMenuStore';

const MainMenuContainer = () => {
  const { state, loadMainMenu, resetMainMenu } = useMainMenuStore();

  useFocusEffect(
    useCallback(() => {
      loadMainMenu();
    }, [loadMainMenu]),
  );

  useEffect(
    () => () => {
      resetMainMenu();
    },
    [resetMainMenu],
  );

  if (!state.isReady) return;

  return <MainMenuPresenter list={state.value} />;
};

export default MainMenuContainer;
