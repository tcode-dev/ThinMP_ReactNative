import useSongsStore from '@/store/songsStore';
import SongListPresenter, { Props as SongListPresenterProps } from './SongListPresenter';

type Props = Pick<SongListPresenterProps, 'play'>;

const SongListContainer: React.FC<Props> = (props) => {
  const { state } = useSongsStore();

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default SongListContainer;
