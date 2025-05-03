import { useEffect } from 'react';
import SongListPresenter, { Props } from './SongListPresenter';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongListContainer: React.FC<Props> = (props) => {
  const { state, loadFavoriteSongs, resetSongs } = useFavoriteSongsStore();

  useEffect(() => {
    loadFavoriteSongs();

    return () => {
      resetSongs();
    };
  }, [loadFavoriteSongs, resetSongs])

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default FavoriteSongListContainer;
