import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import PlaylistEditLListPresenter from './PlaylistEditLListPresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistEditLListContainer = () => {
  const { state, update } = usePlaylistsStore();
  const { loadPlaylists, resetPlaylists } = usePlaylistsStore();

  useFocusEffect(
    useCallback(() => {
      loadPlaylists();
    }, [loadPlaylists]),
  );

  useEffect(
    () => () => {
      resetPlaylists();
    },
    [resetPlaylists],
  );

  if (!state.isReady) return null;

  return <PlaylistEditLListPresenter playlists={state.value} update={update} />;
};

export default PlaylistEditLListContainer;
