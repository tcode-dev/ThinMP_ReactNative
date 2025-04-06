import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import EditHeader from '../EditHeader';
import { useCallback } from 'react';
import { useSongsStore } from '@/store/songsStore';

const FavoriteSongsEditHeaderContainer = () => {
  const { state } = useSongsStore();
  const done = useCallback(() => {
    if (!state.isReady) return;

    const favoriteSongRepository = new FavoriteSongRepository();
    const ids = state.value.map((song) => song.id);

    favoriteSongRepository.updateFavoriteSongs(ids);
  }, [state]);

  return <EditHeader done={done} />;
};

export default FavoriteSongsEditHeaderContainer;
