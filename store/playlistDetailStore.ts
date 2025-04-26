import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { withStateSync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistService } from '@/service/PlaylistService';
import { Result, toLoading, toSuccess } from '@/type/Result';

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
  const update = useCallback(
    (name: string) => {
      if (!state.isReady) return;
      if (state.value === null) return;

      const model = new PlaylistModel(state.value.id, name, state.value.order);

      setState(toSuccess(model));
    },
    [setState, state]
  );
  const resetPlaylistDetail = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadPlaylistDetail, update, resetPlaylistDetail };
};
