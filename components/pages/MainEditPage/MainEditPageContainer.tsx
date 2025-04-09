import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useCallback } from 'react';
import { useVisibilityStore } from '@/store/visibilityStore';
import { useFocusEffect } from 'expo-router';

const MainEditPageContainer = () => {
  const { loadVisibility, resetVisibility } = useVisibilityStore();
  const { loadMainMenuEdit, resetMainMenuEdit } = useMainMenuEditStore();

  useFocusEffect(
    useCallback(() => {
      loadMainMenuEdit();

      return () => {
        resetMainMenuEdit();
      };
    }, [loadMainMenuEdit, resetMainMenuEdit])
  );

  useFocusEffect(
    useCallback(() => {
      loadVisibility();

      return () => {
        resetVisibility();
      };
    }, [loadVisibility, resetVisibility])
  );

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
