import { useEventListener } from 'expo';
import { atom, useAtom } from 'jotai';
import { SongModel } from '@/model/SongModel';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio from 'audio';

const playbackAtom = atom<Result<SongModel>>(toLoading());

export const usePlaybackStore = () => {
  const [state, setState] = useAtom(playbackAtom);

  useEventListener(Audio, 'onPlaybackSongChange', (props) => {
    setState(toSuccess(SongModel.fromDTO(props)));
  });

  return { state };
};
