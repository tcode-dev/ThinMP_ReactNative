import { useCallback } from 'react';
import Audio from 'audio';
import { getRepeat, getShuffle } from '@/config/playerConfig';
import { useSongsStore } from '@/store/songsStore';

export const usePlayer = () => {
  const { state } = useSongsStore();
  const playAlbumSongs = useCallback(
    async (index: number, id: string) => {
      await Audio.startAlbumSongs(index, id, await getRepeat(), await getShuffle());
    },
    [],
  );
  const playArtistSongs = useCallback(
    async(index: number, id: string) => {
      await Audio.startArtistSongs(index, id, await getRepeat(), await getShuffle());
    },
    [],
  );
  const playSongs = useCallback(
    async (index: number) => {
      if (!state.isReady) return;

      const ids = state.value.map((song) => song.id);

      await Audio.start(index, ids, await getRepeat(), await getShuffle());
    },
    [state],
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

  return { playAlbumSongs, playArtistSongs, playSongs, playAllSongs, setRepeat, setShuffle };
};
