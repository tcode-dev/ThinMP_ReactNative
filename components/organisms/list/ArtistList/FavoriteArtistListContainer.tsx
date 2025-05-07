import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import ArtistListPresenter from './ArtistListPresenter';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';

const FavoriteArtistListContainer = () => {
  const { state, loadArtists, resetArtists } = useFavoriteArtistsStore();

  useFocusEffect(
    useCallback(() => {
      loadArtists();
    }, [loadArtists])
  );

  useEffect(
    () => () => {
      resetArtists();
    },
    [resetArtists]
  );

  if (!state.isReady) return null;

  return <ArtistListPresenter artists={state.value} />;
};

export default FavoriteArtistListContainer;
