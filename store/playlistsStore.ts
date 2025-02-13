import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateSync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylists } from '@/repository/playlistRepository';
import { Result, toLoading } from '@/type/Result';

const playlistsAtom = atom<Result<PlaylistModel[]>>(toLoading());

export const usePlaylistsStore = () => {
  const [state, setState] = useAtom(playlistsAtom);
  const fetchPlaylists = useCallback(() => {
    withStateSync<PlaylistModel[]>(() => getPlaylists(), setState);
  }, [setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchPlaylists };
};
