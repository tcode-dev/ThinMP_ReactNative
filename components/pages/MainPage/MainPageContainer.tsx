import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainPageContainer = () => {
  const { fetchShortcuts } = useShortcutsStore();
  const { fetchRecentAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      fetchShortcuts();
      fetchRecentAlbums();
    }, [fetchRecentAlbums, fetchShortcuts]),
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
