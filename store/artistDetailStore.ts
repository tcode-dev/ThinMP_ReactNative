import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { ArtistModel } from '@/model/ArtistModel';
import { ArtistService } from '@/service/ArtistService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const artistDetailAtom = atom<Result<ArtistModel>>(toLoading());

export const useArtistDetailStore = () => {
  const [state, setState] = useAtom(artistDetailAtom);
  const artistService = useMemo(() => new ArtistService(), []);
  const loadArtistDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<ArtistModel>(() => artistService.getArtistDetail(id), setState);
    },
    [artistService, setState]
  );
  const resetArtistDetail = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadArtistDetail, resetArtistDetail };
};
