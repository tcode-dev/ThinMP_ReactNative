import PlaybackButtonPresenter from './PlaybackButtonPresenter';
import useIsPlayingStore from '@/store/isPlayingStore';

const PlaybackButtonContainer = () => {
  const { state: isPlayingState } = useIsPlayingStore();

  if (!isPlayingState.isReady) return null;

  return <PlaybackButtonPresenter isPlaying={isPlayingState.value.isPlaying} />;
};

export default PlaybackButtonContainer;
