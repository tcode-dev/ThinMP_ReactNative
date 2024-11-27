import useSongsStore from '@/store/songsStore';
import MiniPlayerPresenter, { Props } from './MiniPlayerPresenter';

const MiniPlayerContainer: React.FC<Props> = (props) => {
  const { state } = useSongsStore();

  if (!state.isReady) return null;

  return <MiniPlayerPresenter {...props} />;
};

export default MiniPlayerContainer;
