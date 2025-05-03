import SongEditListPresenter from './SongEditListPresenter';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongEditList = () => {
  const { state, removeSong } = useFavoriteSongsStore();

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} />;
};

export default FavoriteSongEditList;
