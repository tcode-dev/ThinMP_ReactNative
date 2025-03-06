import { useCallback } from 'react';
import FavoriteSongsPagePresenter from './FavoriteSongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import { usePlayer } from '@/hooks/usePlayer';
import { useFocusEffect } from 'expo-router';

const FavoriteSongsPageContainer = () => {
  const { loadFavoriteSongs } = useSongsStore();
  const { playSongs } = usePlayer();
  const play = useCallback((index: number) => playSongs(index), [playSongs]);

  useFocusEffect(
    useCallback(() => {
      loadFavoriteSongs();
    }, [loadFavoriteSongs]),
  );

  return <FavoriteSongsPagePresenter play={play} />;
};

export default FavoriteSongsPageContainer;
