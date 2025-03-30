import { useThemeColor } from '@/hooks/useThemeColor';
import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainMenuEditContainer = () => {
  const { state, update } = useMainMenuEditStore();
  const { toggle } = useVisibilityStore();
  const color = useThemeColor();

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} borderBottomColor={color.border} iconColor={color.icon} onPress={toggle} onDragEnd={update} />;
};

export default MainMenuEditContainer;
