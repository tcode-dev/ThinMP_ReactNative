import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { ArtistModel } from '@/model/ArtistModel';
import { ArtistService } from '@/service/ArtistService';
import { withStateAsync, withStateSync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';

const favoriteArtistsAtom = atom<Result<ArtistModel[]>>(toLoading());

export const useFavoriteArtistsStore = () => {
  const [state, setState] = useAtom(favoriteArtistsAtom);
  const artistService = useMemo(() => new ArtistService(), []);
  const loadArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistModel[]>(() => artistService.getFavoriteArtists(), setState);
  }, [artistService, setState]);
  const removeArtist = useCallback(
    (id: string) => {
      if (!state.isReady) return;

      withStateSync<ArtistModel[]>(() => state.value.filter((artist) => artist.id !== id), setState);
    },
    [state, setState]
  );
  const update = useCallback(
    (data: ArtistModel[]) => {
      setState(toSuccess(data));
    },
    [setState]
  );
  const resetArtists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadArtists, removeArtist, update, resetArtists };
};
