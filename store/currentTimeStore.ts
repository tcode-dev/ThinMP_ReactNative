import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { CurrentTimeDTO } from 'audio';

const currentTimeAtom = atom<Result<CurrentTimeDTO>>(toLoading());

export const useCurrentTimeStore = () => {
  const [state, setState] = useAtom(currentTimeAtom);
  const getCurrentTime = useCallback(async (): Promise<void> => {
    await withStateAsync<CurrentTimeDTO>(() => Audio.getCurrentTime(), setState);
  }, [setState]);

  return { state, getCurrentTime };
};
