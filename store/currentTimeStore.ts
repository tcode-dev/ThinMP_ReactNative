import { useEffect, useRef } from 'react';
import { atom, useAtom } from 'jotai';
import Audio, { CurrentTimeProps } from 'audio';
import { Result, toLoading } from '@/type/Result';
import withState from './utils/withState';
import useIsPlayingStore from './isPlayingStore';

const currentTimeAtom = atom<Result<CurrentTimeProps>>(toLoading());
const INTERVAL_MS = 1000;

const useCurrentTimeStore = () => {
  const [state, setState] = useAtom(currentTimeAtom);
  const { state: isPlayingState } = useIsPlayingStore();
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const getCurrentTime = async (): Promise<void> => {
    await withState<CurrentTimeProps>(() => Audio.getCurrentTime(), setState);
  };
  const resetCurrentTime = () => {
    setState(toLoading());
  };

  useEffect(() => {
    const updateCurrentTime = async () => {
      if (isPlayingState.isReady && isPlayingState.value.isPlaying) {
        await getCurrentTime();
        timeoutIdRef.current = setTimeout(updateCurrentTime, INTERVAL_MS);
      }
    };
    const cleanup = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    }

    updateCurrentTime();

    if (!isPlayingState.isReady || !isPlayingState.value.isPlaying) {
      cleanup();
    }

    return () => {
      cleanup();
    };
  }, [isPlayingState]);

  return { state };
};

export default useCurrentTimeStore;
