import { atom, useAtom } from 'jotai';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistProps } from 'audio';
import withState from './utils/withState';

const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = async (): Promise<void> => {
    await withState<ArtistProps[]>(() => Audio.getAllArtists(), setState);
  };

  return { state, fetchAllArtists };
};

export default useArtistsStore;
