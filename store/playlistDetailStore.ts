import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { withStateSync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistService } from '@/service/PlaylistService';
import { Result, toLoading } from '@/type/Result';

const playlistDetailAtom = atom<Result<PlaylistModel | null>>(toLoading());

export const usePlaylistDetailStore = () => {
  const [state, setState] = useAtom(playlistDetailAtom);
  const playlistService = useMemo(() => new PlaylistService(), []);
  const loadPlaylistDetail = useCallback(
    (id: number): void => {
      withStateSync<PlaylistModel | null>(() => playlistService.getPlaylistDetail(id), setState);
    },
    [playlistService, setState]
  );
  const resetPlaylistDetail = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadPlaylistDetail, resetPlaylistDetail };
};
