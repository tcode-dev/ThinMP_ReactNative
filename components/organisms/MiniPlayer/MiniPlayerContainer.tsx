import usePlaybackStore from '@/store/playbackStore';
import MiniPlayerPresenter from './MiniPlayerPresenter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useIsPlayingStore from '@/store/isPlayingStore';

const MiniPlayerContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();
  const { state: isPlayingState } = useIsPlayingStore();

  if (!playbackState.isReady) return null;
  if (!isPlayingState.isReady) return null;

  const href = '/player';

  return <MiniPlayerPresenter {...playbackState.value} href={href} bottom={insets.bottom} isPlaying={isPlayingState.value.isPlaying} />;
};

export default MiniPlayerContainer;
