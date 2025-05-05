import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongEditListPresenter from './SongEditListPresenter';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongEditListContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state, loadSongs, resetSongs, removeSong, update } = usePlaylistSongsStore();

  useFocusEffect(
    useCallback(() => {
      loadSongs(playlistId);
    }, [playlistId, loadSongs]),
  );

  useEffect(
    () => () => {
      resetSongs();
    },
    [resetSongs],
  );

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} update={update} />;
};

export default PlaylistSongEditListContainer;
