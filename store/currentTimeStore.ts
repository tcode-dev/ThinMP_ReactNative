import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import Audio, { CurrentTimeProps } from 'audio';
import { Result, toLoading } from '@/type/Result';
import withState from './utils/withState';

const currentTimeAtom = atom<Result<CurrentTimeProps>>(toLoading());
const INTERVAL_MS = 1000;

const useCurrentTimeStore = () => {
  const [state, setState] = useAtom(currentTimeAtom);

  const getCurrentTime = async (): Promise<void> => {
    await withState<CurrentTimeProps>(() => Audio.getCurrentTime(), setState);
  };

  const resetCurrentTime = () => {
    setState(toLoading());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentTime();
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      resetCurrentTime();
    };
  }, []);

  return { state };
};

export default useCurrentTimeStore;
