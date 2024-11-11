import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { AlbumProps, getAlbumById } from 'audio';

const albumDetailAtom = atom<Result<AlbumProps>>(toLoading());

const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = async (id: string): Promise<void> => {
    try {
      const result = await getAlbumById(id);

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const resetAlbumDetail = () => {
    setState(toLoading());
  };

  return { state, fetchAlbumDetail, resetAlbumDetail };
};

export default useAlbumDetailStore;
