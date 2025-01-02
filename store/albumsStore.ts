import { atom, useAtom } from 'jotai';
import withState from './utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';


const albumsAtom = atom<Result<AlbumProps[]>>(toLoading());

const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = async (): Promise<void> => {
    await withState<AlbumProps[]>(() => Audio.getAllAlbums(), setState);
  };
  const fetchArtistAlbums = async (id: string): Promise<void> => {
    await withState<AlbumProps[]>(() => Audio.getAlbumsByArtistId(id), setState);
  };
  const resetAlbums = () => {
    setState(toLoading());
  };

  return { state, fetchAllAlbums, fetchArtistAlbums, resetAlbums };
};

export default useAlbumsStore;
