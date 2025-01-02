import { atom, useAtom } from 'jotai';
import withState from './utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistProps } from 'audio';


const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = async (): Promise<void> => {
    await withState<ArtistProps[]>(() => Audio.getAllArtists(), setState);
  };
  const resetArtists = () => {
    setState(toLoading());
  };

  return { state, fetchAllArtists, resetArtists };
};

export default useArtistsStore;
