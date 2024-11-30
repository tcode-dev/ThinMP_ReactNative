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

  return <MiniPlayerPresenter {...playbackState.value} bottom={insets.bottom} isPlaying={isPlayingState.value.isPlaying} />;
};

export default MiniPlayerContainer;
