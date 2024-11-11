import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { AlbumProps, getAllAlbums } from 'audio';

const albumsAtom = atom<Result<AlbumProps[]>>(toLoading());

const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = async (): Promise<void> => {
    try {
      const result = await getAllAlbums();

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };

  return { state, fetchAllAlbums };
};

export default useAlbumsStore;
