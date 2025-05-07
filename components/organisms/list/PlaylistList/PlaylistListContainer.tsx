import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import PlaylistListPresenter from './PlaylistListPresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistListContainer = () => {
  const { state } = usePlaylistsStore();
  const { loadPlaylists, resetPlaylists } = usePlaylistsStore();

  useFocusEffect(
    useCallback(() => {
      loadPlaylists();
    }, [loadPlaylists])
  );

  useEffect(
    () => () => {
      resetPlaylists();
    },
    [resetPlaylists]
  );

  if (!state.isReady) return null;

  return <PlaylistListPresenter playlists={state.value} />;
};

export default PlaylistListContainer;
