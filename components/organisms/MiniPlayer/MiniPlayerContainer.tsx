import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MiniPlayerPresenter from './MiniPlayerPresenter';
import { useIsPlayingStore } from '@/store/isPlayingStore';
import { usePlaybackStore } from '@/store/playbackStore';

const MiniPlayerContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const width = Dimensions.get('window').width;
  const href = '/player';

  if (!playbackState.isReady) return null;
  if (!isPlayingState.isReady) return null;

  return <MiniPlayerPresenter {...playbackState.value} href={href} bottom={insets.bottom} width={width} />;
};

export default MiniPlayerContainer;
