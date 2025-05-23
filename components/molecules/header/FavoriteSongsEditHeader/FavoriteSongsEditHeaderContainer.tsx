import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongsEditHeaderContainer = () => {
  const { state } = useFavoriteSongsStore();
  const done = useCallback(() => {
    if (!state.isReady) return;

    const favoriteSongRepository = new FavoriteSongRepository();
    const ids = state.value.map((song) => song.id);

    favoriteSongRepository.updateFavoriteSongs(ids);
  }, [state]);

  return <EditHeader done={done} />;
};

export default FavoriteSongsEditHeaderContainer;
