import MainMenuPresenter from './MainMenuPresenter';
import { useMainMenuStore } from '@/store/mainMenuStore';

const MainMenuContainer = () => {
  const { state } = useMainMenuStore();

  if (!state.isReady) return;

  return <MainMenuPresenter list={state.value} />;
};

export default MainMenuContainer;
