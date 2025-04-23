import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { AlbumModel } from '@/model/AlbumModel';
import { AlbumService } from '@/service/AlbumService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const albumDetailAtom = atom<Result<AlbumModel | null>>(toLoading());

export const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const albumService = useMemo(() => new AlbumService(), []);
  const loadAlbumDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumModel | null>(() => albumService.getAlbumDetail(id), setState);
    },
    [albumService, setState]
  );
  const resetAlbumDetail = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadAlbumDetail, resetAlbumDetail };
};
