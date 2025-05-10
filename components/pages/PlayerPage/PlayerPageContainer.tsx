import { useWindowDimensions } from 'react-native';
import PlayerPagePresenter from './PlayerPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaybackStore } from '@/store/playbackStore';

const PlayerPageContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const color = useThemeColor();
  const {width, height} = useWindowDimensions();

  if (!playbackState.isReady) return null;

  const imageSize = height * 0.3;

  return <PlayerPagePresenter {...playbackState.value} width={width} imageSize={imageSize} backgroundColor={color.background} />;
};

export default PlayerPageContainer;
