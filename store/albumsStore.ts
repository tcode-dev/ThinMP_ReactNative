import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { AlbumProps, getAllAlbums, getAlbumsByArtistId } from 'audio';

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
  const fetchArtistAlbums = async (id: string): Promise<void> => {
    try {
      const result = await getAlbumsByArtistId(id);

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const resetAlbums = () => {
    setState(toLoading());
  };

  return { state, fetchAllAlbums, fetchArtistAlbums, resetAlbums };
};

export default useAlbumsStore;
