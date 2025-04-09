import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { withStateSync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistService } from '@/service/PlaylistService';
import { Result, toLoading } from '@/type/Result';

const playlistsAtom = atom<Result<PlaylistModel[]>>(toLoading());

export const usePlaylistsStore = () => {
  const [state, setState] = useAtom(playlistsAtom);
  const playlistService = useMemo(() => new PlaylistService(), []);
  const loadPlaylists = useCallback(async (): Promise<void> => {
    withStateSync<PlaylistModel[]>(() => playlistService.getPlaylists(), setState);
  }, [playlistService, setState]);
  const resetPlaylists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadPlaylists, resetPlaylists };
};
