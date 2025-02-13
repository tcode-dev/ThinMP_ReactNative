import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { getFavoriteSongs } from '@/repository/FavoriteSongRepository';
import { getPlaylistSongs, Playlist } from '@/repository/playlistRepository';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { SongProps } from 'audio';

const songsAtom = atom<Result<SongProps[]>>(toLoading());

export const useSongsStore = () => {
  const [state, setState] = useAtom(songsAtom);
  const fetchAllSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongProps[]>(() => Audio.getAllSongs(), setState);
  }, [setState]);
  const fetchArtistSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongProps[]>(() => Audio.getSongsByArtistId(id), setState);
    },
    [setState],
  );
  const fetchAlbumSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongProps[]>(() => Audio.getSongsByAlbumId(id), setState);
    },
    [setState],
  );
  const fetchFavoriteSongs = useCallback(async (): Promise<void> => {
    await withStateAsync<SongProps[]>(() => {
      const favoriteSongs = getFavoriteSongs();
      const songIds = favoriteSongs.map((song) => song.id);

      return Audio.getSongsByIds(songIds);
    }, setState);
  }, [setState]);
  const fetchPlaylistSongs = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<SongProps[]>(async () => {
        const playlistSongs = getPlaylistSongs(id as unknown as Playlist['id']);
        const songIds = playlistSongs.map((song) => song.song_id);
        const songs = await Audio.getSongsByIds(songIds);
        const filtered = playlistSongs.map((playlistSong) => songs.find((song) => song.id === playlistSong.song_id)).filter((song) => song !== undefined);

        return filtered;
      }, setState);
    },
    [setState],
  );

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchAllSongs, fetchArtistSongs, fetchAlbumSongs, fetchFavoriteSongs, fetchPlaylistSongs };
};
