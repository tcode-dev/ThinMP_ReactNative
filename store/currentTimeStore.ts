import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { CurrentTimeProps } from 'audio';

const currentTimeAtom = atom<Result<CurrentTimeProps>>(toLoading());

export const useCurrentTimeStore = () => {
  const [state, setState] = useAtom(currentTimeAtom);
  const getCurrentTime = useCallback(async (): Promise<void> => {
    await withState<CurrentTimeProps>(() => Audio.getCurrentTime(), setState);
  }, [setState]);

  return { state, getCurrentTime };
};
