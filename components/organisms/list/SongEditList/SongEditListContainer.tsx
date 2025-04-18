import SongEditListPresenter from './SongEditListPresenter';
import { useSongsStore } from '@/store/songsStore';

const SongEditListContainer = () => {
  const { state, update } = useSongsStore();

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} onDragEnd={update} />;
};

export default SongEditListContainer;
