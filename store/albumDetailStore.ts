import { atom, useAtom } from 'jotai'
import { AlbumProps, getAlbumById } from 'audio';
import { Result } from '@/type/Result';

const albumDetailAtom = atom<Result<AlbumProps>>({ isLoading: true });

const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = async (id: string): Promise<void> => {
    try {
      const result: AlbumProps = await getAlbumById(id);
      setState({isLoading: false, isSuccess: true, value: result});
    } catch (error) {
      setState({isLoading: false, isSuccess: false});
    }
  };

  return { state, fetchAlbumDetail };
};

export default useAlbumDetailStore;
