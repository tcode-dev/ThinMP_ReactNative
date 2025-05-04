import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { AlbumModel } from '@/model/AlbumModel';
import { AlbumService } from '@/service/AlbumService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const artistAlbumsAtom = atom<Result<AlbumModel[]>>(toLoading());

export const useArtistAlbumsStore = () => {
  const [state, setState] = useAtom(artistAlbumsAtom);
  const albumService = useMemo(() => new AlbumService(), []);
  const loadAlbums = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumModel[]>(() => albumService.getArtistAlbums(id), setState);
    },
    [albumService, setState]
  );
  const resetAlbums = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadAlbums, resetAlbums };
};
