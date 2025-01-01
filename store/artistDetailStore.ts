import { atom, useAtom } from 'jotai';

import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistDetailProps } from 'audio';

import withState from './utils/withState';

const artistDetailAtom = atom<Result<ArtistDetailProps>>(toLoading());

const useArtistDetailStore = () => {
  const [state, setState] = useAtom(artistDetailAtom);
  const fetchArtistDetail = async (id: string): Promise<void> => {
    await withState<ArtistDetailProps>(() => Audio.getArtistDetailById(id), setState);
  };
  const resetArtistDetail = () => {
    setState(toLoading());
  };

  return { state, fetchArtistDetail, resetArtistDetail };
};

export default useArtistDetailStore;
