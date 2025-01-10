import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';

const albumsAtom = atom<Result<AlbumProps[]>>(toLoading());

export const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = useCallback(async (): Promise<void> => {
    await withState<AlbumProps[]>(() => Audio.getAllAlbums(), setState);
  }, [setState]);
  const fetchArtistAlbums = useCallback(async (id: string): Promise<void> => {
    await withState<AlbumProps[]>(() => Audio.getAlbumsByArtistId(id), setState);
  }, [setState]);
  const resetAlbums = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchAllAlbums, fetchArtistAlbums, resetAlbums };
};
