import { useEffect } from 'react';
import ArtistEditListPresenter from './ArtistEditListPresenter';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';

const FavoriteArtistEditListContainer = () => {
  const { state, loadArtists, removeArtist, resetArtists } = useFavoriteArtistsStore();

    useEffect(() => {
      loadArtists();
  
      return () => {
        resetArtists();
      };
    }, [loadArtists, resetArtists]);
  if (!state.isReady) return;

  return <ArtistEditListPresenter artists={state.value} remove={removeArtist} />;
};

export default FavoriteArtistEditListContainer;
