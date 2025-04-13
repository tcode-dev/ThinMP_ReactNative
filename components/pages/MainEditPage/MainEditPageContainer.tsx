import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useCallback } from 'react';
import { useVisibilityStore } from '@/store/visibilityStore';
import { useFocusEffect } from 'expo-router';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainEditPageContainer = () => {
  const { loadVisibility, resetVisibility } = useVisibilityStore();
  const { loadMainMenuEdit, resetMainMenuEdit } = useMainMenuEditStore();
  const { loadShortcuts, resetShortcuts } = useShortcutsStore();

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

  useFocusEffect(
    useCallback(() => {
      loadShortcuts();

      return () => {
        resetShortcuts();
      };
    }, [loadShortcuts, resetShortcuts])
  );

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
