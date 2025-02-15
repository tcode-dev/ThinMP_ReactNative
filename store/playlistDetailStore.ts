import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylist, PlaylistDTO } from '@/repository/PlaylistRepository';
import { Result, toLoading } from '@/type/Result';

const playlistDetailAtom = atom<Result<PlaylistModel | null>>(toLoading());

export const usePlaylistDetailStore = () => {
  const [state, setState] = useAtom(playlistDetailAtom);
  const fetchPlaylistDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<PlaylistModel | null>(() => getPlaylistDetail(id), setState);
    },
    [setState],
  );
  const getPlaylistDetail = async (id: string): Promise<PlaylistModel | null> => {
    const result = getPlaylist(id as unknown as PlaylistDTO['id']);

    if (result === null) return null;

    const playlistModel = {
      id: result.id,
      name: result.name,
      order: result.sort_order,
    };

    return playlistModel;
  };

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchPlaylistDetail };
};
