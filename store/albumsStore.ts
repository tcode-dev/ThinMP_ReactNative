import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { AlbumModel } from '@/model/AlbumModel';
import { AlbumService } from '@/service/AlbumService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const albumsAtom = atom<Result<AlbumModel[]>>(toLoading());

export const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const albumService = useMemo(() => new AlbumService(), []);
  const loadAllAlbums = useCallback(async (): Promise<void> => {
    await withStateAsync<AlbumModel[]>(() => albumService.getAllAlbums(), setState);
  }, [albumService, setState]);
  const loadArtistAlbums = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumModel[]>(() => albumService.getArtistAlbums(id), setState);
    },
    [albumService, setState]
  );
  const loadRecentAlbums = useCallback(async (): Promise<void> => {
    await withStateAsync<AlbumModel[]>(() => albumService.getRecentAlbums(), setState);
  }, [albumService, setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState]
  );

  return { state, loadAllAlbums, loadArtistAlbums, loadRecentAlbums };
};
