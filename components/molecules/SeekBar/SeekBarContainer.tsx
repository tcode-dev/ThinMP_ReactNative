import { throttle } from 'lodash';
import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { Platform } from 'react-native';
import SeekBarPresenter from './SeekBarPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useCurrentTimeStore } from '@/store/currentTimeStore';
import { useIsPlayingStore } from '@/store/isPlayingStore';
import { usePlaybackStore } from '@/store/playbackStore';
import { formatTime } from '@/utils/formatTime';
import Audio from 'audio';

const INTERVAL_MS = 1000;

const SeekBarContainer = () => {
  const { state: playbackState } = usePlaybackStore();
  const { state: currentTimeState, getCurrentTime } = useCurrentTimeStore();
  const { state: isPlayingState } = useIsPlayingStore();
  const [isSliding, setIsSliding] = useState(false);
  const color = useThemeColor();
  const timeoutIdRef = useRef<number | null>(null);
  const currentTime = currentTimeState.isReady ? currentTimeState.value.currentTime : 0;
  const duration = playbackState.isReady ? playbackState.value.duration : 0;
  const currentTimeFormatted = formatTime(currentTime);
  const durationFormatted = formatTime(duration);
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
  const handleSlidingStart = useCallback(() => {
    cleanup();
    setIsSliding(true);
  }, [cleanup]);
  const handleSlidingComplete = useCallback(() => {
    setIsSliding(false);
    updateCurrentTime();
  }, [updateCurrentTime]);
  const handleValueChange = useMemo(
    () =>
      throttle((value: number) => {
        if (!isSliding) return;
        Audio.seek(value);
      }, 100),
    [isSliding]
  );
  const seekBar = Platform.select({
    android: color.seekBar.android,
    ios: color.seekBar.ios,
  })!;

  useEffect(() => {
    updateCurrentTime();

    if (!isPlayingState.isReady || !isPlayingState.value.isPlaying) {
      cleanup();
    }

    return () => {
      cleanup();
    };
  }, [cleanup, isPlayingState, updateCurrentTime]);

  return (
    <SeekBarPresenter
      value={currentTime}
      duration={duration}
      currentTimeFormatted={currentTimeFormatted}
      durationFormatted={durationFormatted}
      thumbTintColor={seekBar.thumbTint}
      minimumTrackTintColor={seekBar.minimumTrackTint}
      maximumTrackTintColor={seekBar.maximumTrackTint}
      onSlidingStart={handleSlidingStart}
      onSlidingComplete={handleSlidingComplete}
      onValueChange={handleValueChange}
    />
  );
};

export default SeekBarContainer;
