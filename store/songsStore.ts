import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { SongProps } from 'audio';

const songsAtom = atom<Result<SongProps[]>>(toLoading());

export const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = useCallback(async (): Promise<void> => {
    await withState<SongProps[]>(() => Audio.getAllSongs(), setState);
  }, [setState]);
  const fetchArtistSongs = useCallback(
    async (id: string): Promise<void> => {
      await withState<SongProps[]>(() => Audio.getSongsByArtistId(id), setState);
    },
    [setState],
  );
  const fetchAlbumSongs = useCallback(
    async (id: string): Promise<void> => {
      await withState<SongProps[]>(() => Audio.getSongsByAlbumId(id), setState);
    },
    [setState],
  );
  // const fetchFavoriteSongs = async (): Promise<void> => {};
  // const fetchPlaylistSongs = async (id: string): Promise<void> => {};
  const resetSongs = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchAllSongs, fetchArtistSongs, fetchAlbumSongs, resetSongs };
};
