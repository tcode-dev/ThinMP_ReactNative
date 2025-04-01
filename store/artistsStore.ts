import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { ArtistModel } from '@/model/ArtistModel';
import { ArtistService } from '@/service/ArtistService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const artistsAtom = atom<Result<ArtistModel[]>>(toLoading());

export const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const artistService = useMemo(() => new ArtistService(), []);
  const loadAllArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistModel[]>(() => artistService.getAllArtists(), setState);
  }, [artistService, setState]);
  const loadFavoriteArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistModel[]>(() => artistService.getFavoriteArtists(), setState);
  }, [artistService, setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState]
  );

  return { state, loadAllArtists, loadFavoriteArtists };
};
