import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync, withStateSync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';

const songsAtom = atom<Result<SongModel[]>>(toLoading());

export const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const songService = useMemo(() => new SongService(), []);
  const loadAllSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongModel[]>(() => songService.getAllSongs(), setState);
  }, [setState, songService]);
  const loadArtistSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongModel[]>(() => songService.getSongsByArtistId(id), setState);
    },
    [setState, songService]
  );
  const loadAlbumSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongModel[]>(() => songService.getSongsByAlbumId(id), setState);
    },
    [setState, songService]
  );
  const loadFavoriteSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongModel[]>(() => songService.getFavoriteSongs(), setState);
  }, [setState, songService]);
  const loadPlaylistSongs = useCallback(
    async (id: string): Promise<void> => {
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
    (data: SongModel[]) => {
      setState(toSuccess(data));
    },
    [setState]
  );
  const resetSongs = useCallback(
    () => setState(toLoading()),
    [setState]
  );

  return { state, loadAllSongs, loadArtistSongs, loadAlbumSongs, loadFavoriteSongs, loadPlaylistSongs, removeSong, update, resetSongs };
};
