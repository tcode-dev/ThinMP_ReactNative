import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongListContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadSongs, resetSongs } = usePlaylistSongsStore();
  const { playPlaylistSongsState } = usePlayer();
  const play = useCallback((index: number) => playPlaylistSongsState(index), [playPlaylistSongsState]);

  useEffect(() => {
    loadSongs(id);

    return () => {
      resetSongs();
    };
  }, [id, loadSongs, resetSongs])

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default PlaylistSongListContainer;
