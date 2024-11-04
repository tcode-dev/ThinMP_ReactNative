import useSongsStore from '@/store/songsStore';
import SongListPresenter from './SongListPresenter';

const SongListContainer = () => {
  const { state } = useSongsStore();

  if (state.isLoading) return null;

  if (state.isSuccess) return <SongListPresenter songs={state.value} />;

  return null;
}

export default SongListContainer;
