import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/useThemeColor';
import useIsPlayingStore from '@/store/isPlayingStore';
import usePlaybackStore from '@/store/playbackStore';

import MiniPlayerPresenter from './MiniPlayerPresenter';

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
