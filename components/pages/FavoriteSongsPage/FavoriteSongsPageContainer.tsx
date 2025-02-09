import { useCallback, useEffect } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const FavoriteSongsPageContainer = () => {
  const { state, fetchFavoriteSongs } = useSongsStore();
  const play = useCallback(
    (index: number) => {
      if (!state.isReady) return null;

      const ids = state.value.map((song) => song.id);

      Audio.start(index, ids);
    },
    [state],
  );

  useEffect(() => {
    fetchFavoriteSongs();
  }, [fetchFavoriteSongs]);

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
