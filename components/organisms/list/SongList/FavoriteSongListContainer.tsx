import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongListContainer = () => {
  const { state, loadSongs, resetSongs } = useFavoriteSongsStore();
  const { playFavoriteSongs } = usePlayer();
  const play = useCallback((index: number) => playFavoriteSongs(index), [playFavoriteSongs]);

  useFocusEffect(
    useCallback(() => {
      loadSongs();
    }, [loadSongs]),
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

export default FavoriteSongListContainer;
