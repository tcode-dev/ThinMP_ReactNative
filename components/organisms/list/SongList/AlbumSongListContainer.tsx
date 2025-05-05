import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { useAlbumId } from '@/hooks/useAlbumId';
import { usePlayer } from '@/hooks/usePlayer';
import { useAlbumSongsStore } from '@/store/albumSongsStore';

const AlbumSongListContainer = () => {
  const { albumId } = useAlbumId();
  const { state, loadSongs, resetSongs } = useAlbumSongsStore();
  const { playAlbumSongs } = usePlayer();
  const play = useCallback((index: number) => playAlbumSongs(index, albumId), [albumId, playAlbumSongs]);

  useFocusEffect(
    useCallback(() => {
      loadSongs(albumId);
    }, [albumId, loadSongs]),
  );

  useEffect(
    () => () => {
      resetSongs();
    },
    [resetSongs],
  );

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default AlbumSongListContainer;
