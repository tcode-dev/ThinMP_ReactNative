import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylist, Playlist } from '@/repository/playlistRepository';
import { Result, toLoading, toSuccess } from '@/type/Result';

const playlistDetailAtom = atom<Result<PlaylistModel>>(toLoading());

export const usePlaylistDetailStore = () => {
  const [state, setState] = useAtom(playlistDetailAtom);
  const fetchPlaylistDetail = useCallback(
    (id: string): void => {
      const result = getPlaylist(id as unknown as Playlist['id']);

      if (result === null) return;

      setState(toSuccess(result));
    },
    [setState],
  );

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchPlaylistDetail };
};
