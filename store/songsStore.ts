import { atom, useAtom } from 'jotai'
import { SongProps, getAllSongs, getSongsByAlbumId } from 'audio';
import { Result } from '@/type/Result';

const songsAtom = atom<Result<SongProps[]>>({ isLoading: true, isReady: false });

const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    try {
      const result: SongProps[] = await getAllSongs();
      setState({isLoading: false, isSuccess: true, isReady: true, value: result});
    } catch (error) {
      setState({isLoading: false, isSuccess: false, isReady: false});
    }
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {}
  const fetchAlbumSongs = async (id: string): Promise<void> => {
    try {
      const result: SongProps[] = await getSongsByAlbumId(id);
      setState({isLoading: false, isSuccess: true, isReady: true, value: result});
    } catch (error) {
      setState({isLoading: false, isSuccess : false, isReady: false});
    }
  }
  const fetchFavoriteSongs = async (): Promise<void> => {}
  const fetchPlaylistSongs = async (id: string): Promise<void> => {}

  return { state, fetchAllSongs, fetchAlbumSongs };
};

export default useSongsStore;
