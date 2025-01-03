import { useEventListener } from 'expo';
import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio, { SongProps } from 'audio';

const playbackAtom = atom<Result<SongProps>>(toLoading());

export const usePlaybackStore = () => {
  const [state, setState] = useAtom(playbackAtom);

  useEventListener(Audio, 'onPlaybackSongChange', (props) => {
    setState(toSuccess(props));
  });

  return { state };
};
