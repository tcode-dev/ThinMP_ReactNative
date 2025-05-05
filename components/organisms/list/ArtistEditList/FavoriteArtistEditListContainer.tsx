import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import ArtistEditListPresenter from './ArtistEditListPresenter';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';

const FavoriteArtistEditListContainer = () => {
  const { state, loadArtists, removeArtist, resetArtists, update } = useFavoriteArtistsStore();

  useFocusEffect(
    useCallback(() => {
      loadArtists();
    }, [loadArtists]),
  );

  useEffect(
    () => () => {
      resetArtists();
    },
    [resetArtists],
  );

  if (!state.isReady) return;

  return <ArtistEditListPresenter artists={state.value} remove={removeArtist} update={update} />;
};

export default FavoriteArtistEditListContainer;
