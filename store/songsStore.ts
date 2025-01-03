import { atom, useAtom } from 'jotai';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { SongProps } from 'audio';

const songsAtom = atom<Result<SongProps[]>>(toLoading());

export const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    await withState<SongProps[]>(() => Audio.getAllSongs(), setState);
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {
    await withState<SongProps[]>(() => Audio.getSongsByArtistId(id), setState);
  };
  const fetchAlbumSongs = async (id: string): Promise<void> => {
    await withState<SongProps[]>(() => Audio.getSongsByAlbumId(id), setState);
  };
  // const fetchFavoriteSongs = async (): Promise<void> => {};
  // const fetchPlaylistSongs = async (id: string): Promise<void> => {};
  const resetSongs = () => {
    setState(toLoading());
  };

  return { state, fetchAllSongs, fetchArtistSongs, fetchAlbumSongs, resetSongs };
};
