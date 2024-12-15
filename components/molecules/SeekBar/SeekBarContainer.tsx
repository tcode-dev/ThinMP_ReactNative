import Audio from 'audio';
import useCurrentTimeStore from '@/store/currentTimeStore';
import SeekBarPresenter from './SeekBarPresenter';
import usePlaybackStore from '@/store/playbackStore';

const SeekBarContainer = () => {
  const {state: playbackState} = usePlaybackStore();
  const {state: currentTimeState} = useCurrentTimeStore();
  const currentTime = currentTimeState.isReady ? currentTimeState.value.currentTime : 0;
  const duration = playbackState.isReady ? playbackState.value.duration : 0;
  const value = currentTime / duration;
  const onValueChange = () => { };

  return <SeekBarPresenter value={value} onValueChange={onValueChange} />;
};

export default SeekBarContainer;
