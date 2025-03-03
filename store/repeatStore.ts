import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import Audio, { RepeatMode } from 'audio';
import { getRepeat, saveRepeat } from '@/config/playerConfig';

const repeatAtom = atom<RepeatMode>(RepeatMode.Off);

export const useRepeatStore = () => {
  const [state, setState] = useAtom(repeatAtom);
  const loadRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    setState(repeatMode);
  }, [setState]);
  const setRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    Audio.setRepeat(repeatMode);
  }, []);
  const changeRepeat = useCallback(() => {
    const repeatMode = state === RepeatMode.Off ? RepeatMode.All : state === RepeatMode.All ? RepeatMode.One : RepeatMode.Off;

    setState(repeatMode);
    saveRepeat(repeatMode);
    setRepeat();
  }, [state, setState]);

  return { state, loadRepeat, setRepeat, changeRepeat };
};
