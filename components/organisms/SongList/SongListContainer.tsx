import useSongsStore from '@/store/songsStore';
import SongListPresenter, { Props as SongListPresenterProps} from './SongListPresenter';

const SongListContainer = ({ scrollEnabled }: Pick<SongListPresenterProps, 'scrollEnabled'>) => {
  const { state } = useSongsStore();

  if (state.isLoading) return null;

  if (state.isSuccess) return <SongListPresenter songs={state.value} scrollEnabled={scrollEnabled} />;

  return null;
};

export default SongListContainer;
