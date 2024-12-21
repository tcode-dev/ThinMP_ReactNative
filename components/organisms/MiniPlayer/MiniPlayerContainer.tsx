import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePlaybackStore from '@/store/playbackStore';
import useIsPlayingStore from '@/store/isPlayingStore';
import MiniPlayerPresenter from './MiniPlayerPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const MiniPlayerContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const color = useThemeColor();

  if (!playbackState.isReady) return null;
  if (!isPlayingState.isReady) return null;

  const href = '/player';

  return <MiniPlayerPresenter {...playbackState.value} href={href} bottom={insets.bottom} backgroundColor={color.background} />;
};

export default MiniPlayerContainer;
