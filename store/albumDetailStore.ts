import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { AlbumModel } from '@/model/AlbumModel';
import { AlbumService } from '@/service/AlbumService';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const albumDetailAtom = atom<Result<AlbumModel>>(toLoading());

export const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const albumService = useMemo(() => new AlbumService(), []);
  const loadAlbumDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumModel>(() => albumService.getAlbumDetail(id), setState);
    },
    [albumService, setState],
  );
  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadAlbumDetail };
};
