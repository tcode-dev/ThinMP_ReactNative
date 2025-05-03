import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const albumSongsAtom = atom<Result<SongModel[]>>(toLoading());

export const useAlbumSongsStore = () => {
  const [state, setState] = useAtom(albumSongsAtom);
  const songService = useMemo(() => new SongService(), []);
  const loadSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongModel[]>(() => songService.getSongsByAlbumId(id), setState);
    },
    [setState, songService]
  );
  const resetSongs = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadSongs, resetSongs };
};
