import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { RepeatMode } from 'audio';
import { getRepeat } from '@/config/playerConfig';

const repeatAtom = atom<RepeatMode>(RepeatMode.Off);

export const useRepeatStore = () => {
  const [state, setState] = useAtom(repeatAtom);
  const loadRepeat = useCallback(async (): Promise<void> => {
    const repeatMode = await getRepeat();

    setState(repeatMode);
  }, [setState, ]);

  return { state, loadRepeat };
};
