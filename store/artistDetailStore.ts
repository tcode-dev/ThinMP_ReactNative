import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistDetailProps } from 'audio';

const artistDetailAtom = atom<Result<ArtistDetailProps>>(toLoading());

export const useArtistDetailStore = () => {
  const [state, setState] = useAtom(artistDetailAtom);
  const fetchArtistDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<ArtistDetailProps>(() => Audio.getArtistDetailById(id), setState);
    },
    [setState],
  );

  useEffect(() => () => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchArtistDetail };
};
