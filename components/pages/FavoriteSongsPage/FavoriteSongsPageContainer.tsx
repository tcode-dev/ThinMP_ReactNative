import { useCallback, useEffect } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const FavoriteSongsPageContainer = () => {
  const { fetchFavoriteSongs, resetSongs } = useSongsStore();
  const play = useCallback((index: number) => {
    Audio.startAllSongs(index);
  }, []);

  useEffect(() => {
    fetchFavoriteSongs();

    return () => {
      resetSongs();
    };
  }, [fetchFavoriteSongs, resetSongs]);

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
