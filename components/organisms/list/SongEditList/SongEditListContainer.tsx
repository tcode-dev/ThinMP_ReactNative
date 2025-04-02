import SongEditListPresenter from './SongEditListPresenter';
import { useSongsStore } from '@/store/songsStore';

const SongEditListContainer = () => {
  const { state } = useSongsStore();

  if (!state.isReady) return null;

  return <SongEditListPresenter songs={state.value} />;
};

export default SongEditListContainer;
