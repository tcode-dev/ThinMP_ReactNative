import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useAlbumSongsStore } from '@/store/albumSongsStore';

const AlbumSongListContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadSongs, resetSongs } = useAlbumSongsStore();
  const { playAlbumSongs } = usePlayer();
  const play = useCallback((index: number) => playAlbumSongs(index, id), [id, playAlbumSongs]);

  useEffect(() => {
    loadSongs(id);

    return () => {
      resetSongs();
    };
  }, [id, loadSongs, resetSongs]);

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default AlbumSongListContainer;
