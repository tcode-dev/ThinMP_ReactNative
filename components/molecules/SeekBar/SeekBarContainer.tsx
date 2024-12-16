import { useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import Audio from 'audio';
import useCurrentTimeStore from '@/store/currentTimeStore';
import useIsPlayingStore from '@/store/isPlayingStore';
import usePlaybackStore from '@/store/playbackStore';
import SeekBarPresenter from './SeekBarPresenter';

const INTERVAL_MS = 1000;

const SeekBarContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const { state: currentTimeState, getCurrentTime } = useCurrentTimeStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const currentTime = currentTimeState.isReady ? currentTimeState.value.currentTime : 0;
  const duration = playbackState.isReady ? playbackState.value.duration : 0;
  const value = currentTime / duration;
  const updateCurrentTime = useCallback(async () => {
    if (isSliding || !isPlayingState.isReady || !isPlayingState.value.isPlaying) return;

    await getCurrentTime();
    timeoutIdRef.current = setTimeout(updateCurrentTime, INTERVAL_MS);
  }, [isSliding, isPlayingState, getCurrentTime]);
  const cleanup = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  }, []);
  const onSlidingStart = useCallback(() => {
    cleanup();
    setIsSliding(true);
  },[cleanup]);
  const onSlidingComplete = useCallback(() => {
    updateCurrentTime();
    setIsSliding(false);
  }, []);
  const onValueChange = useCallback(
    throttle((value: number) => {
      Audio.seek(value * duration);
    }, 100),
    []
  );

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
