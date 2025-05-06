import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainMenuEditContainer = () => {
  const { state, loadMainMenuEdit, resetMainMenuEdit, update } = useMainMenuEditStore();
  const { loadVisibility, resetVisibility } = useVisibilityStore();
  const { toggle } = useVisibilityStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadMainMenuEdit();
    }, [loadMainMenuEdit]),
  );

  useFocusEffect(
    useCallback(() => {
      loadVisibility();
    }, [loadVisibility]),
  );

  useEffect(
    () => () => {
      resetMainMenuEdit();
      resetVisibility();
    },
    [resetMainMenuEdit, resetVisibility],
  );

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} borderBottomColor={color.border} iconColor={color.icon} toggle={toggle} update={update} />;
};

export default MainMenuEditContainer;
