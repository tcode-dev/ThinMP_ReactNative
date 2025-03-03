import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import Audio, { ShuffleMode } from 'audio';
import { getShuffle, saveShuffle } from '@/config/playerConfig';

const repeatAtom = atom<ShuffleMode>(ShuffleMode.Off);

export const useShuffleStore = () => {
  const [state, setState] = useAtom(repeatAtom);
  const loadShuffle = useCallback(async (): Promise<void> => {
    const shuffleMode = await getShuffle();

    setState(shuffleMode);
  }, [setState]);
  const setShuffle = useCallback(async (): Promise<void> => {
    const shuffleMode = await getShuffle();

    Audio.setShuffle(shuffleMode);
  }, []);
  const changeShuffle = useCallback(() => {
    const shuffleMode = state === ShuffleMode.Off ? ShuffleMode.On : ShuffleMode.Off;

    setState(shuffleMode);
    saveShuffle(shuffleMode);
    setShuffle();
  }, [state, setState]);

  return { state, loadShuffle, setShuffle, changeShuffle };
};
