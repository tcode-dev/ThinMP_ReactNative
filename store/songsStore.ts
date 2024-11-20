import { atom, useAtom } from 'jotai';
import { Result, toLoading } from '@/type/Result';
import { SongProps, getAllSongs, getSongsByAlbumId, getSongsByArtistId } from 'audio';
import withState from './utils/withState';

const songsAtom = atom<Result<SongProps[]>>(toLoading());

const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    await withState<SongProps[]>(getAllSongs, setState);
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {
    await withState<SongProps[]>(() => getSongsByArtistId(id), setState);
  };
  const fetchAlbumSongs = async (id: string): Promise<void> => {
    await withState<SongProps[]>(() => getSongsByAlbumId(id), setState);
  };
  const fetchFavoriteSongs = async (): Promise<void> => {};
  const fetchPlaylistSongs = async (id: string): Promise<void> => {};
  const resetSongs = () => {
    setState(toLoading());
  };

  return { state, fetchAllSongs, fetchArtistSongs, fetchAlbumSongs, resetSongs };
};

export default useSongsStore;
