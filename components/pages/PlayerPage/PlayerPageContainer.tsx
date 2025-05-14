import * as Device from 'expo-device';
import { useWindowDimensions } from 'react-native';
import PlayerPagePresenter from './PlayerPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaybackStore } from '@/store/playbackStore';

const PlayerPageContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const color = useThemeColor();
  const { width, height } = useWindowDimensions();
  const isTablet = Device.deviceType === Device.DeviceType.TABLET;

  if (!playbackState.isReady) return null;

  const imageSize = height * 0.3;

  return <PlayerPagePresenter {...playbackState.value} backgroundColor={color.background} imageSize={imageSize} isTablet={isTablet} width={width} />;
};

export default PlayerPageContainer;
