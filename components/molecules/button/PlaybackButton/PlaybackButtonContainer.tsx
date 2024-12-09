import Audio from 'audio';
import useIsPlayingStore from '@/store/isPlayingStore';
import PlaybackButtonPresenter, { Props as PlaybackButtonPresenterProps } from './PlaybackButtonPresenter';

type Props = Partial<Pick<PlaybackButtonPresenterProps, 'size'>>;

const PlaybackButtonContainer: React.FC<Props> = ({ size = 100 }) => {
  const { state: isPlayingState } = useIsPlayingStore();

  if (!isPlayingState.isReady) return null;

  const name = isPlayingState.value.isPlaying ? 'pause' : 'play';
  const play = () => Audio.play();
  const pause = () => Audio.pause();
  const onPress = isPlayingState.value.isPlaying ? pause : play;

  return <PlaybackButtonPresenter name={name} size={size} onPress={onPress} />;
};

export default PlaybackButtonContainer;
