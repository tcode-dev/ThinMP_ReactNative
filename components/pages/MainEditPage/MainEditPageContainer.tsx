import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useShortcutsStore } from '@/store/shortcutsStore';
import { useVisibilityStore } from '@/store/visibilityStore';

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
