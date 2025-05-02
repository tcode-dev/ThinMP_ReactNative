import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const allSongsAtom = atom<Result<SongModel[]>>(toLoading());

export const useAllSongsStore = () => {
  const [state, setState] = useAtom(allSongsAtom);
  const songService = useMemo(() => new SongService(), []);
  const loadSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongModel[]>(() => songService.getAllSongs(), setState);
  }, [setState, songService]);
  const resetSongs = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadSongs, resetSongs };
};
