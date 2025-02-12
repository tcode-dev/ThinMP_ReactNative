import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from './utils/withState';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylist, getPlaylistSong, Playlist } from '@/repository/playlistRepository';
import { Result, toLoading } from '@/type/Result';
import Audio from 'audio';

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
    const playlistId = id as unknown as Playlist['id'];
    const result = getPlaylist(playlistId);

    if (result === null) return null;

    const playlistSong = getPlaylistSong(playlistId);
    const song = playlistSong ? await Audio.getSongById(playlistSong.song_id) : null;
    const playlistModel = {
      id: result.id,
      name: result.name,
      imageId: song?.imageId ?? '',
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
