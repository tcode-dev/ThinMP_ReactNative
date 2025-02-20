import { Dimensions } from 'react-native';
import PlayerPagePresenter from './PlayerPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaybackStore } from '@/store/playbackStore';

const PlayerPageContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const color = useThemeColor();

  if (!playbackState.isReady) return null;

  const width = Dimensions.get('window').width;
  const imageSize = Dimensions.get('window').height * 0.3;

  return <PlayerPagePresenter {...playbackState.value} width={width} imageSize={imageSize} backgroundColor={color.background} />;
};

export default PlayerPageContainer;
