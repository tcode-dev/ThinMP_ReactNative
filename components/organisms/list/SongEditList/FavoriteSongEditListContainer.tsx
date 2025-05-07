import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongEditListPresenter from './SongEditListPresenter';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongEditList = () => {
  const { state, loadSongs, resetSongs, removeSong, update } = useFavoriteSongsStore();

  useFocusEffect(
    useCallback(() => {
      loadSongs();
    }, [loadSongs])
  );

  useEffect(
    () => () => {
      resetSongs();
    },
    [resetSongs]
  );

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} update={update} />;
};

export default FavoriteSongEditList;
