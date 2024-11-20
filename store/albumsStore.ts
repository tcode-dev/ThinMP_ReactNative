import { atom, useAtom } from 'jotai';
import { Result, toLoading } from '@/type/Result';
import { AlbumProps, getAllAlbums, getAlbumsByArtistId } from 'audio';
import withState from './utils/withState';

const albumsAtom = atom<Result<AlbumProps[]>>(toLoading());

const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = async (): Promise<void> => {
    await withState<AlbumProps[]>(getAllAlbums, setState);
  };
  const fetchArtistAlbums = async (id: string): Promise<void> => {
    await withState<AlbumProps[]>(() => getAlbumsByArtistId(id), setState);
  };
  const resetAlbums = () => {
    setState(toLoading());
  };

  return { state, fetchAllAlbums, fetchArtistAlbums, resetAlbums };
};

export default useAlbumsStore;
