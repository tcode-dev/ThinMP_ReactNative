import { useEventListener } from 'expo';
import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio, { IsPlayingProps } from 'audio';

const isPlayingAtom = atom<Result<IsPlayingProps>>(toLoading());

const useIsPlayingStore = () => {
  const [state, setState] = useAtom(isPlayingAtom);

  useEventListener(Audio, 'onIsPlayingChange', (props) => {
    setState(toSuccess(props));
  });

  return { state };
};

export default useIsPlayingStore;
