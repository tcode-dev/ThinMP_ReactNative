import usePlaybackStore from '@/store/playbackStore';
import MiniPlayerPresenter from './MiniPlayerPresenter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MiniPlayerContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();

  if (!playbackState.isReady) return null;

  const href = '/player';

  return <MiniPlayerPresenter {...playbackState.value} href={href} bottom={insets.bottom} />;
};

export default MiniPlayerContainer;
