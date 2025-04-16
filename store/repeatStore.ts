import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { getRepeat, saveRepeat } from '@/config/playerConfig';
import { usePlayer } from '@/hooks/usePlayer';
import { RepeatMode } from 'audio';

const repeatAtom = atom<RepeatMode>(RepeatMode.Off);

export const useRepeatStore = () => {
  const [state, setState] = useAtom(repeatAtom);
  const { setRepeat } = usePlayer();
  const loadRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    setState(repeatMode);
  }, [setState]);
  const changeRepeat = useCallback(() => {
    const repeatMode = state === RepeatMode.Off ? RepeatMode.All : state === RepeatMode.All ? RepeatMode.One : RepeatMode.Off;

    setState(repeatMode);
    saveRepeat(repeatMode);
    setRepeat();
  }, [state, setState]);

  return { state, loadRepeat, changeRepeat };
};
