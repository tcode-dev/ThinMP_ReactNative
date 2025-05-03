import { useEffect } from 'react';
import SongListPresenter, { Props } from './SongListPresenter';
import { useAllSongsStore } from '@/store/allSongsStore';

const AllSongListContainer: React.FC<Props> = (props) => {
  const { state, loadSongs, resetSongs } = useAllSongsStore();

  useEffect(() => {
    loadSongs();

    return () => {
      resetSongs();
    };
  }, [loadSongs, resetSongs])

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default AllSongListContainer;
