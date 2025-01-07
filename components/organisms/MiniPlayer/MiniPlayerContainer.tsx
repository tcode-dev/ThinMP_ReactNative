import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MiniPlayerPresenter from './MiniPlayerPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useIsPlayingStore } from '@/store/isPlayingStore';
import { usePlaybackStore } from '@/store/playbackStore';

const MiniPlayerContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const color = useThemeColor();

  if (!playbackState.isReady) return null;
  if (!isPlayingState.isReady) return null;

  const href = '/player';
  const style = Platform.select({
    android: {
      backgroundColor: color.background,
    },
  });

  return <MiniPlayerPresenter {...playbackState.value} href={href} bottom={insets.bottom} style={style} />;
};

export default MiniPlayerContainer;
