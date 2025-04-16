import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useSongsStore } from '@/store/songsStore';

const FavoriteSongsPageContainer = () => {
  const { loadFavoriteSongs, resetSongs } = useSongsStore();
  const { playSongs } = usePlayer();
  const play = useCallback((index: number) => playSongs(index), [playSongs]);

  useFocusEffect(
    useCallback(() => {
      loadFavoriteSongs();

      return () => {
        resetSongs();
      };
    }, [loadFavoriteSongs, resetSongs])
  );

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
