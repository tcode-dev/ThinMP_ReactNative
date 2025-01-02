import { useCallback } from 'react';
import PlaybackButtonPresenter, { Props as PlaybackButtonPresenterProps } from './PlaybackButtonPresenter';
import useIsPlayingStore from '@/store/isPlayingStore';
import Audio from 'audio';

type Props = Partial<Pick<PlaybackButtonPresenterProps, 'buttonSize' | 'iconSize'>>;

const PlaybackButtonContainer: React.FC<Props> = ({ buttonSize = 75, iconSize = 75 }) => {
  const { state: isPlayingState } = useIsPlayingStore();
  const play = useCallback(() => Audio.play(), []);
  const pause = useCallback(() => Audio.pause(), []);

  if (!isPlayingState.isReady) return null;

  const name = isPlayingState.value.isPlaying ? 'pause' : 'play';
  const onPress = isPlayingState.value.isPlaying ? pause : play;

  return <PlaybackButtonPresenter name={name} buttonSize={buttonSize} iconSize={iconSize} onPress={onPress} />;
};

export default PlaybackButtonContainer;
