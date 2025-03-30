import { useThemeColor } from '@/hooks/useThemeColor';
import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';

const MainMenuEditContainer = () => {
  const { state, toggle, update } = useMainMenuEditStore();
  const color = useThemeColor();

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} borderBottomColor={color.border} iconColor={color.icon} onPress={toggle} onDragEnd={update} />;
};

export default MainMenuEditContainer;
