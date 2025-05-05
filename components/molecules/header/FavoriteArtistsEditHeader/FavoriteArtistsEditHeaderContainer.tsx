import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';

const FavoriteArtistsEditHeaderContainer = () => {
  const { state } = useFavoriteArtistsStore();
  const done = useCallback(() => {
    if (!state.isReady) return;

    const favoriteArtistRepository = new FavoriteArtistRepository();
    const ids = state.value.map((artist) => artist.id);

    favoriteArtistRepository.updateFavoriteArtists(ids);
  }, [state]);

  return <EditHeader done={done} />;
};

export default FavoriteArtistsEditHeaderContainer;
