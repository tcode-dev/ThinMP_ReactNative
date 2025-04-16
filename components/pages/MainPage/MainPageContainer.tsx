import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useMainMenuStore } from '@/store/mainMenuStore';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainPageContainer = () => {
  const { loadShortcuts, resetShortcuts } = useShortcutsStore();
  const { loadRecentAlbums, resetAlbums } = useAlbumsStore();
  const { loadMainMenu, resetMainMenu } = useMainMenuStore();

  useFocusEffect(
    useCallback(() => {
      loadMainMenu();
      loadShortcuts();
      loadRecentAlbums();

      return () => {
        resetMainMenu();
        resetShortcuts();
        resetAlbums();
      };
    }, [loadMainMenu, loadShortcuts, loadRecentAlbums, resetMainMenu, resetShortcuts, resetAlbums])
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
