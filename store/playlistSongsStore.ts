import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync, withStateSync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';

const playlistSongsAtom = atom<Result<SongModel[]>>(toLoading());

export const usePlaylistSongsStore = () => {
  const [state, setState] = useAtom(playlistSongsAtom);
  const songService = useMemo(() => new SongService(), []);
  const loadSongs = useCallback(
    async (id: number): Promise<void> => {
      await withStateAsync<SongModel[]>(async () => songService.getPlaylistSongs(id), setState);
    },
    [setState, songService]
  );
  const removeSong = useCallback(
    (id: string) => {
      if (!state.isReady) return;

      withStateSync<SongModel[]>(() => state.value.filter((song) => song.id !== id), setState);
    },
    [state, setState]
  );
  const update = useCallback(
    ({ data }: { data: SongModel[] }) => {
      setState(toSuccess(data));
    },
    [setState]
  );
  const resetSongs = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadSongs, removeSong, update, resetSongs };
};
