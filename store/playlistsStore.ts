import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { withStateSync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistService } from '@/service/PlaylistService';
import { Result, toLoading, toSuccess } from '@/type/Result';

const playlistsAtom = atom<Result<PlaylistModel[]>>(toLoading());

export const usePlaylistsStore = () => {
  const [state, setState] = useAtom(playlistsAtom);
  const playlistService = useMemo(() => new PlaylistService(), []);
  const loadPlaylists = useCallback(async (): Promise<void> => {
    withStateSync<PlaylistModel[]>(() => playlistService.getPlaylists(), setState);
  }, [playlistService, setState]);
  const removePlaylist = useCallback(
    (id: number) => {
      if (!state.isReady) return;

      withStateSync<PlaylistModel[]>(() => state.value.filter((playlist) => playlist.id !== id), setState);
    },
    [state, setState]
  );
  const update = useCallback(
    ({ data }: { data: PlaylistModel[] }) => {
      setState(toSuccess(data));
    },
    [setState],
  );
  const resetPlaylists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadPlaylists, removePlaylist, update, resetPlaylists };
};
