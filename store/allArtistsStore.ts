import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { ArtistModel } from '@/model/ArtistModel';
import { ArtistService } from '@/service/ArtistService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const artistsStoreAtom = atom<Result<ArtistModel[]>>(toLoading());

export const useAllArtistsStore = () => {
  const [state, setState] = useAtom(artistsStoreAtom);
  const artistService = useMemo(() => new ArtistService(), []);
  const loadArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistModel[]>(() => artistService.getAllArtists(), setState);
  }, [artistService, setState]);
  const resetArtists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadArtists, resetArtists };
};
