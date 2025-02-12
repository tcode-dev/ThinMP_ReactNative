import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { PlaylistModel } from '@/model/PlaylistModel';
import { getPlaylist, getPlaylistSong, Playlist } from '@/repository/playlistRepository';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio from 'audio';

const playlistDetailAtom = atom<Result<PlaylistModel>>(toLoading());

export const usePlaylistDetailStore = () => {
  const [state, setState] = useAtom(playlistDetailAtom);
  const fetchPlaylistDetail = useCallback(
    async (id: string): Promise<void> => {
      const playlistId = id as unknown as Playlist['id'];
      const result = getPlaylist(playlistId);

      if (result === null) return;

      const playlistSong = getPlaylistSong(playlistId);
      const song = playlistSong ? await Audio.getSongById(playlistSong.song_id) : null;
      const playlistModel = {
        id: result.id,
        name: result.name,
        imageId: song?.imageId ?? '',
        order: result.sort_order,
      };

      setState(toSuccess(playlistModel));
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
