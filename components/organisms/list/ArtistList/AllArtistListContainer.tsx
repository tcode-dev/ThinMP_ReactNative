import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import ArtistListPresenter from './ArtistListPresenter';
import { useAllArtistsStore } from '@/store/allArtistsStore';

const ArtistListContainer = () => {
  const { state, loadArtists, resetArtists } = useAllArtistsStore();

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

export default ArtistListContainer;
