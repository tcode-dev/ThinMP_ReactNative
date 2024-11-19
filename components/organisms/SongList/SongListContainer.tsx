import useSongsStore from '@/store/songsStore';
import SongListPresenter, { Props as SongListPresenterProps } from './SongListPresenter';

const SongListContainer = ({ scrollEnabled }: Pick<SongListPresenterProps, 'scrollEnabled'>) => {
  const { state } = useSongsStore();

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} scrollEnabled={scrollEnabled} />;
};

export default SongListContainer;
