import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { ShuffleMode } from 'audio';
import { getShuffle, saveShuffle } from '@/config/playerConfig';
import { usePlayer } from '@/hooks/usePlayer';

const repeatAtom = atom<ShuffleMode>(ShuffleMode.Off);

export const useShuffleStore = () => {
  const [state, setState] = useAtom(repeatAtom);
  const { setShuffle } = usePlayer();
  const loadShuffle = useCallback(async (): Promise<void> => {
    const shuffleMode = await getShuffle();

    setState(shuffleMode);
  }, [setState]);

  const changeShuffle = useCallback(() => {
    const shuffleMode = state === ShuffleMode.Off ? ShuffleMode.On : ShuffleMode.Off;

    setState(shuffleMode);
    saveShuffle(shuffleMode);
    setShuffle();
  }, [state, setState]);

  return { state, loadShuffle, changeShuffle };
};
