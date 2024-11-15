import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { ArtistDetailProps, getArtistDetailById } from 'audio';

const artistDetailAtom = atom<Result<ArtistDetailProps>>(toLoading());

const useArtistDetailStore = () => {
  const [state, setState] = useAtom(artistDetailAtom);
  const fetchArtistDetail = async (id: string): Promise<void> => {
    try {
      const result = await getArtistDetailById(id);

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };
  const resetArtistDetail = () => {
    setState(toLoading());
  };

  return { state, fetchArtistDetail, resetArtistDetail };
};

export default useArtistDetailStore;
