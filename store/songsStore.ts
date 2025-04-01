import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { SongModel } from '@/model/SongModel';
import { SongService } from '@/service/SongService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

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

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState]
  );

  return { state, loadAllSongs, loadArtistSongs, loadAlbumSongs, loadFavoriteSongs, loadPlaylistSongs };
};
