import { atom, useAtom } from 'jotai';
import { Result, toLoading } from '@/type/Result';
import { AlbumProps, getAlbumById } from 'audio';
import withState from './utils/withState';

const albumDetailAtom = atom<Result<AlbumProps>>(toLoading());

const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = async (id: string): Promise<void> => {
    await withState<AlbumProps>(() => getAlbumById(id), setState);
  };
  const resetAlbumDetail = () => {
    setState(toLoading());
  };

  return { state, fetchAlbumDetail, resetAlbumDetail };
};

export default useAlbumDetailStore;
