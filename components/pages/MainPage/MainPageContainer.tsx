import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useMainMenuStore } from '@/store/mainMenuStore';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainPageContainer = () => {
  const { loadShortcuts, resetShortcuts } = useShortcutsStore();
  const { loadMainMenu, resetMainMenu } = useMainMenuStore();

  useFocusEffect(
    useCallback(() => {
      loadMainMenu();
      loadShortcuts();

      return () => {
        resetMainMenu();
        resetShortcuts();
      };
    }, [loadMainMenu, loadShortcuts, resetMainMenu, resetShortcuts])
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
