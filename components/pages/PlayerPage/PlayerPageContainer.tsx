import PlayerPagePresenter from './PlayerPagePresenter';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaybackStore } from '@/store/playbackStore';

const PlayerPageContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const { isPortrait, isTablet, longestSide, ratio, shortestSide, height } = useDevice();
  const color = useThemeColor();

  if (!playbackState.isReady) return null;

  const backgroundSize = isTablet ? longestSide : shortestSide;
  const frameHeight = isTablet ? (isPortrait ? height * 0.8 : height * 0.9) : longestSide;
  const frameWidth = isTablet ? frameHeight * ratio : shortestSide;
  const imageSize = isTablet ? frameHeight * 0.4 : frameHeight * 0.3;
  const frameBackgroundColor = isTablet ? `${color.background}50` : 'transparent';

  return (
    <PlayerPagePresenter
      {...playbackState.value}
      backgroundSize={backgroundSize}
      linearGradientBackgroundColor={color.background}
      frameHeight={frameHeight}
      frameWidth={frameWidth}
      frameBackgroundColor={frameBackgroundColor}
      imageSize={imageSize}
      isTablet={isTablet}
    />
  );
};

export default PlayerPageContainer;
