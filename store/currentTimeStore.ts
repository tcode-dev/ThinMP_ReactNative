import { atom, useAtom } from 'jotai';
import Audio, { CurrentTimeProps } from 'audio';
import { Result, toLoading } from '@/type/Result';
import withState from './utils/withState';

const currentTimeAtom = atom<Result<CurrentTimeProps>>(toLoading());

const useCurrentTimeStore = () => {
  const [state, setState] = useAtom(currentTimeAtom);
  const getCurrentTime = async (): Promise<void> => {
    await withState<CurrentTimeProps>(() => Audio.getCurrentTime(), setState);
  };

  return { state, getCurrentTime };
};

export default useCurrentTimeStore;
