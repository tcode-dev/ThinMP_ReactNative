import { useEffect } from 'react';
import ArtistListPresenter from './ArtistListPresenter';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';

const FavoriteArtistListContainer = () => {
  const { state, loadArtists, resetArtists } = useFavoriteArtistsStore();

  useEffect(() => {
    loadArtists();

    return () => {
      resetArtists();
    };
  }, [loadArtists, resetArtists]);

  if (!state.isReady) return null;

  return <ArtistListPresenter artists={state.value} />;
};

export default FavoriteArtistListContainer;
