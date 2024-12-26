import { useCallback } from 'react';
import Audio from 'audio';
import useIsPlayingStore from '@/store/isPlayingStore';
import PlaybackButtonPresenter, { Props as PlaybackButtonPresenterProps } from './PlaybackButtonPresenter';

type Props = Partial<Pick<PlaybackButtonPresenterProps, 'buttonSize' | 'iconSize'>>;

const PlaybackButtonContainer: React.FC<Props> = ({ buttonSize = 75, iconSize = 75 }) => {
  const { state: isPlayingState } = useIsPlayingStore();

  if (!isPlayingState.isReady) return null;

  const name = isPlayingState.value.isPlaying ? 'pause' : 'play';
  const play = useCallback(() => Audio.play(),[]);
  const pause = useCallback(() => Audio.pause(),[]);
  const onPress = isPlayingState.value.isPlaying ? pause : play;

  return <PlaybackButtonPresenter name={name} buttonSize={buttonSize} iconSize={iconSize} onPress={onPress} />;
};

export default PlaybackButtonContainer;
