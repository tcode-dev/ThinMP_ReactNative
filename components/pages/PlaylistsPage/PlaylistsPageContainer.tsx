import { useCallback } from 'react';
import PlaylistsPagePresenter from './PlaylistsPagePresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';
import { useFocusEffect } from 'expo-router';

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
