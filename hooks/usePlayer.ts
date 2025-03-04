import { useCallback } from 'react';
import Audio from 'audio';
import { getRepeat, getShuffle } from '@/config/playerConfig';
import { useSongsStore } from '@/store/songsStore';

export const usePlayer = () => {
  const { state } = useSongsStore();
  const playAlbumSongs = useCallback(
    (index: number, id: string) => {
      Audio.startAlbumSongs(index, id);
      setMode();
    },
    [],
  );
  const playArtistSongs = useCallback(
    (index: number, id: string) => {
      Audio.startArtistSongs(index, id);
      setMode();
    },
    [],
  );
  const playSongs = useCallback(
    (index: number) => {
      console.log('playSongs1');
      if (!state.isReady) return null;
      console.log('playSongs2');
      const ids = state.value.map((song) => song.id);

      Audio.start(index, ids);
    },
    [state],
  );
  const playAllSongs = useCallback((index: number) => {
    Audio.startAllSongs(index);
  }, []);
  const setMode = useCallback(async (): Promise<void> => {
    setRepeat();
    setShuffle();
  }, []);
  const setRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    Audio.setRepeat(repeatMode);
  }, []);
  const setShuffle = useCallback(async (): Promise<void> => {
    const shuffleMode = await getShuffle();

    Audio.setShuffle(shuffleMode);
  }, []);

  return { playAlbumSongs, playArtistSongs, playSongs, playAllSongs, setRepeat, setShuffle };
};
