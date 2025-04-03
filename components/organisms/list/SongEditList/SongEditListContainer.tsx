import SongEditListPresenter from './SongEditListPresenter';
import { useSongsStore } from '@/store/songsStore';

const SongEditListContainer = () => {
  const { state } = useSongsStore();

  if (!state.isReady) return null;
console.log(state.value);
  return <SongEditListPresenter songs={state.value} />;
};

export default SongEditListContainer;
