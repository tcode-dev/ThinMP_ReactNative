import { atom, useAtom } from 'jotai';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistDetailProps } from 'audio';

const artistDetailAtom = atom<Result<ArtistDetailProps>>(toLoading());

export const useArtistDetailStore = () => {
  const [state, setState] = useAtom(artistDetailAtom);
  const fetchArtistDetail = async (id: string): Promise<void> => {
    await withState<ArtistDetailProps>(() => Audio.getArtistDetailById(id), setState);
  };
  const resetArtistDetail = () => {
    setState(toLoading());
  };

  return { state, fetchArtistDetail, resetArtistDetail };
};
