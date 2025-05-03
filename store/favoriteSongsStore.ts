import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync, withStateSync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';

const favoriteSongsAtom = atom<Result<SongModel[]>>(toLoading());

export const useFavoriteSongsStore = () => {
  const [state, setState] = useAtom(favoriteSongsAtom);
  const songService = useMemo(() => new SongService(), []);
  const loadSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongModel[]>(() => songService.getFavoriteSongs(), setState);
  }, [setState, songService]);
  const removeSong = useCallback(
    (id: string) => {
      if (!state.isReady) return;

      withStateSync<SongModel[]>(() => state.value.filter((song) => song.id !== id), setState);
    },
    [state, setState]
  );
  const update = useCallback(
    (data: SongModel[]) => {
      setState(toSuccess(data));
    },
    [setState]
  );
  const resetSongs = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadSongs, resetSongs, removeSong, update };
};
