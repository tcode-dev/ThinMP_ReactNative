import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylists } from '@/repository/playlistRepository';
import { Result, toLoading, toSuccess } from '@/type/Result';

const playlistsAtom = atom<Result<PlaylistModel[]>>(toLoading());

export const usePlaylistsStore = () => {
  const [state, setState] = useAtom(playlistsAtom);
  const fetchPlaylists = useCallback((): void => {
    setState(toSuccess(getPlaylists()));
  }, [setState]);
  const resetPlaylists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchPlaylists, resetPlaylists };
};
