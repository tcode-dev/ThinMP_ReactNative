import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { SongProps, getAllSongs, getSongsByAlbumId, getSongsByArtistId } from 'audio';

const songsAtom = atom<Result<SongProps[]>>(toLoading());

const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    try {
      const result = await getAllSongs();

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {
    try {
      const result = await getSongsByArtistId(id);

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const fetchAlbumSongs = async (id: string): Promise<void> => {
    try {
      const result = await getSongsByAlbumId(id);

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const fetchFavoriteSongs = async (): Promise<void> => {};
  const fetchPlaylistSongs = async (id: string): Promise<void> => {};
  const resetSongs = () => {
    setState(toLoading());
  };

  return { state, fetchAllSongs, fetchArtistSongs, fetchAlbumSongs, resetSongs };
};

export default useSongsStore;
