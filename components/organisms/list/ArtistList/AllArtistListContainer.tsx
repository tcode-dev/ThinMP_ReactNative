import { useEffect } from 'react';
import ArtistListPresenter from './ArtistListPresenter';
import { useAllArtistsStore } from '@/store/allArtistsStore';

const ArtistListContainer = () => {
  const { state, loadArtists, resetArtists } = useAllArtistsStore();

  useEffect(() => {
    loadArtists();

    return () => {
      resetArtists();
    };
  }, [loadArtists, resetArtists]);

  if (!state.isReady) return null;

  return <ArtistListPresenter artists={state.value} />;
};

export default ArtistListContainer;
