import SongEditListPresenter from './SongEditListPresenter';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';

const FavoriteSongEditList = () => {
  const { state, removeSong, update } = useFavoriteSongsStore();

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} update={update} />;
};

export default FavoriteSongEditList;
