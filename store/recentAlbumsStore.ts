import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { AlbumModel } from '@/model/AlbumModel';
import { AlbumService } from '@/service/AlbumService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const recentAlbumsAtom = atom<Result<AlbumModel[]>>(toLoading());

export const useRecentAlbumsStore = () => {
  const [state, setState] = useAtom(recentAlbumsAtom);
  const albumService = useMemo(() => new AlbumService(), []);
  const loadAlbums = useCallback(async (): Promise<void> => {
    await withStateAsync<AlbumModel[]>(() => albumService.getRecentAlbums(), setState);
  }, [albumService, setState]);
  const resetAlbums = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadAlbums, resetAlbums };
};
