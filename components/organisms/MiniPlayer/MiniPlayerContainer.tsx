import usePlaybackStore from '@/store/playbackStore';
import MiniPlayerPresenter, { Props } from './MiniPlayerPresenter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MiniPlayerContainer = () => {
  const { state } = usePlaybackStore();
  const insets = useSafeAreaInsets();

  if (!state.isReady) return null;

  return <MiniPlayerPresenter {...state.value} bottom={insets.bottom} />;
};

export default MiniPlayerContainer;
