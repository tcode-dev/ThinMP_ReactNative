import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainPagePresenter from './MainPagePresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useShortcutsStore } from '@/store/shortcutsStore';

const MainPageContainer = () => {
  const { fetchShortcuts, resetShortcuts } = useShortcutsStore();
  const { fetchRecentAlbums, resetAlbums } = useAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      fetchShortcuts();
      fetchRecentAlbums();

      return () => {
        resetShortcuts();
        resetAlbums();
      };
    }, [fetchRecentAlbums, fetchShortcuts, resetAlbums, resetShortcuts]),
  );

  return <MainPagePresenter />;
};

export default MainPageContainer;
