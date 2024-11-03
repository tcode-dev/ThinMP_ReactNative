import useSongsStore from '@/store/songsStore';
import SongListPresenter from './SongListPresenter';

const SongListContainer = () => {
  const { songs } = useSongsStore();

  return <SongListPresenter songs={songs} />;
}

export default SongListContainer;
