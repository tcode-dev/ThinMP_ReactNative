import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainPageContainer = () => {
  const { loadShortcuts } = useShortcutsStore();
  const { loadRecentAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      loadShortcuts();
      loadRecentAlbums();
    }, [loadShortcuts, loadRecentAlbums ]),
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
