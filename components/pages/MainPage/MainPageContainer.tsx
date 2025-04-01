import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useShortcutsStore } from '@/store/shortcutsStore';
import { useMainMenuStore } from '@/store/mainMenuStore';

const MainPageContainer = () => {
  const { loadShortcuts } = useShortcutsStore();
  const { loadRecentAlbums } = useAlbumsStore();
  const { loadMainMenu } = useMainMenuStore();

  useFocusEffect(
    useCallback(() => {
      loadMainMenu();
      loadShortcuts();
      loadRecentAlbums();
    }, [loadMainMenu, loadShortcuts, loadRecentAlbums])
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
