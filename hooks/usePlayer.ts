import { useCallback } from 'react';
import { getRepeat, getShuffle } from '@/config/playerConfig';
import { useFavoriteSongsStore } from '@/store/favoriteSongsStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';
import Audio from 'audio';

export const usePlayer = () => {
  const { state: favoriteSongsState } = useFavoriteSongsStore();
  const { state: playlistSongsState } = usePlaylistSongsStore();
  const playAlbumSongs = useCallback(async (index: number, id: string) => {
    await Audio.startAlbumSongs(index, id, await getRepeat(), await getShuffle());
  }, []);
  const playArtistSongs = useCallback(async (index: number, id: string) => {
    await Audio.startArtistSongs(index, id, await getRepeat(), await getShuffle());
  }, []);
  const playFavoriteSongs = useCallback(
    async (index: number) => {
      if (!favoriteSongsState.isReady) return;

      const ids = favoriteSongsState.value.map((song) => song.id);

      await Audio.start(index, ids, await getRepeat(), await getShuffle());
    },
    [favoriteSongsState]
  );
  const playPlaylistSongsState = useCallback(
    async (index: number) => {
      if (!playlistSongsState.isReady) return;

      const ids = playlistSongsState.value.map((song) => song.id);

      await Audio.start(index, ids, await getRepeat(), await getShuffle());
    },
    [playlistSongsState]
  );
  const playAllSongs = useCallback(async (index: number) => {
    await Audio.startAllSongs(index, await getRepeat(), await getShuffle());
  }, []);
  const setRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    await Audio.setRepeat(repeatMode);
  }, []);
  const setShuffle = useCallback(async (): Promise<void> => {
    const shuffleMode = await getShuffle();

    await Audio.setShuffle(shuffleMode);
  }, []);

  return { playAlbumSongs, playArtistSongs, playFavoriteSongs, playPlaylistSongsState, playAllSongs, setRepeat, setShuffle };
};
