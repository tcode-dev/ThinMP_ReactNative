import { atom, useAtom } from 'jotai'
import { SongProps, getAllSongs } from 'audio';
import { Result } from '@/type/Result';

const songsAtom = atom<Result<SongProps[]>>({ isLoading: true });

const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    try {
      const result: SongProps[] = await getAllSongs();
      setState({isLoading: false, isSuccess: true, value: result});
    } catch (error) {
      setState({isLoading: false, isSuccess: false});
    }
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {}
  const fetchAlbumSongs = async (id: string): Promise<void> => {}
  const fetchFavoriteSongs = async (): Promise<void> => {}
  const fetchPlaylistSongs = async (id: string): Promise<void> => {}

  return { state, fetchAllSongs };
};

export default useSongsStore;
