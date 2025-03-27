import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';

const MainMenuEditContainer = () => {
  const { state, toggle, update } = useMainMenuEditStore();

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} onPress={toggle} onDragEnd={update} />;
};

export default MainMenuEditContainer;
