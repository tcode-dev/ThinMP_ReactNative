import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { useSongsStore } from '@/store/songsStore';

const PlaylistDetailEditPageContainer = () => {
  const { loadFavoriteSongs, resetSongs } = useSongsStore();

  useFocusEffect(
    useCallback(() => {
      loadFavoriteSongs();

      return () => {
        resetSongs();
      };
    }, [loadFavoriteSongs, resetSongs])
  );

  return <PlaylistDetailEditPagePresenter />;
};

export default PlaylistDetailEditPageContainer;
