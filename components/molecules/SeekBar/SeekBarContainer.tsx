import Audio from 'audio';
import useCurrentTimeStore from '@/store/currentTimeStore';
import SeekBarPresenter from './SeekBarPresenter';
import usePlaybackStore from '@/store/playbackStore';
import useIsPlayingStore from '@/store/isPlayingStore';
import { useEffect, useRef, useState } from 'react';

const INTERVAL_MS = 1000;

const SeekBarContainer = () => {
  const {state: playbackState} = usePlaybackStore();
  const {state: currentTimeState, getCurrentTime} = useCurrentTimeStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const currentTime = currentTimeState.isReady ? currentTimeState.value.currentTime : 0;
  const duration = playbackState.isReady ? playbackState.value.duration : 0;
  const value = currentTime / duration;
  const updateCurrentTime = async () => {
    if (isSliding || !isPlayingState.isReady || !isPlayingState.value.isPlaying) return;

    await getCurrentTime();
    timeoutIdRef.current = setTimeout(updateCurrentTime, INTERVAL_MS);
  };
  const cleanup = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  }
  const onSlidingStart = () => {
    cleanup();
    setIsSliding(true);
  }
  const onSlidingComplete = () => {
    updateCurrentTime();
    setIsSliding(false);
  }
  const onValueChange = (value: number) => {
    Audio.seek(value * duration);
  };

  useEffect(() => {
    updateCurrentTime();

    if (!isPlayingState.isReady || !isPlayingState.value.isPlaying) {
      cleanup();
    }

    return () => {
      cleanup();
    };
  }, [isPlayingState]);

  return <SeekBarPresenter value={value} onSlidingStart={onSlidingStart} onSlidingComplete={onSlidingComplete} onValueChange={onValueChange} />;
};

export default SeekBarContainer;
