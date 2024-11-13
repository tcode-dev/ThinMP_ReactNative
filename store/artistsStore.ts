import { atom, useAtom } from 'jotai';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { ArtistProps, getAllArtists } from 'audio';

const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = async (): Promise<void> => {
    try {
      const result = await getAllArtists();

      setState(toSuccess(result));
    } catch (error) {
      setState(toFailure());
    }
  };

  return { state, fetchAllArtists };
};

export default useArtistsStore;
