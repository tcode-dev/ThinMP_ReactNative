import { atom, useAtom } from 'jotai'
import { SongsProps, getAllSongs } from 'audio';

const songsAtom = atom<SongsProps[]>([]);

const useSongsStore = () => {
  const [songs, setSongs] = useAtom(songsAtom);
  const fetchAllSongs = async (): Promise<void> => {
    try {
      const result: SongsProps[] = await getAllSongs();
      setSongs(result);
    } catch (error) {
      console.error('Failed to fetch songs:', error);
    }
  };
  const fetchArtistSongs = async (id: string): Promise<void> => {}
  const fetchAlbumSongs = async (id: string): Promise<void> => {}
  const fetchFavoriteSongs = async (): Promise<void> => {}
  const fetchPlaylistSongs = async (id: string): Promise<void> => {}

  return { songs, fetchAllSongs };
};

export default useSongsStore;
