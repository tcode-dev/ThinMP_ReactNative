import { atom, useAtom } from 'jotai'
import { AlbumProps, getAllAlbums } from 'audio';
import { Result } from '@/type/Result';

const albumsAtom = atom<Result<AlbumProps[]>>({ isLoading: true });

const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = async (): Promise<void> => {
    try {
      const result: AlbumProps[] = await getAllAlbums();
      setState({isLoading: false, isSuccess: true, value: result});
    } catch (error) {
      setState({isLoading: false, isSuccess: false});
    }
  };

  return { state, fetchAllAlbums };
};

export default useAlbumsStore;
