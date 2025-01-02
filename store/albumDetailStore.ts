import { atom, useAtom } from 'jotai';
import withState from './utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';

const albumDetailAtom = atom<Result<AlbumProps>>(toLoading());

const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = async (id: string): Promise<void> => {
    await withState<AlbumProps>(() => Audio.getAlbumById(id), setState);
  };
  const resetAlbumDetail = () => {
    setState(toLoading());
  };

  return { state, fetchAlbumDetail, resetAlbumDetail };
};

export default useAlbumDetailStore;
