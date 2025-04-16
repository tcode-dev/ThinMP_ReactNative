import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import PlaylistsPagePresenter from './PlaylistsPagePresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistsPageContainer = () => {
  const { loadPlaylists, resetPlaylists } = usePlaylistsStore();

  useFocusEffect(
    useCallback(() => {
      loadPlaylists();

      return () => {
        resetPlaylists();
      };
    }, [loadPlaylists, resetPlaylists])
  );

  return <PlaylistsPagePresenter />;
};

export default PlaylistsPageContainer;
