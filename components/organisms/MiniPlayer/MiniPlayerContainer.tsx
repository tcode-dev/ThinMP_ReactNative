import usePlaybackStore from '@/store/playbackStore';
import MiniPlayerPresenter, { Props } from './MiniPlayerPresenter';

const MiniPlayerContainer = () => {
  const { state } = usePlaybackStore();

  if (!state.isReady) return null;

  return <MiniPlayerPresenter {...state.value} />;
};

export default MiniPlayerContainer;
