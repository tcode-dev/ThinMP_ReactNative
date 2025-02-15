import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { withStateAsync } from './utils/withState';
import { ShortcutModel } from '@/model/ShortcutModel';
import { ShortcutService } from '@/service/ShortcutService';
import { Result, toLoading } from '@/type/Result';

const shortcutsAtom = atom<Result<ShortcutModel[]>>(toLoading());

export const useShortcutsStore = () => {
  const [state, setState] = useAtom(shortcutsAtom);
  const shortcutService = useMemo(() => new ShortcutService(), []);
  const loadShortcuts = useCallback(async (): Promise<void> => {
    await withStateAsync<ShortcutModel[]>(() => shortcutService.getShortcuts(), setState);
  }, [setState, shortcutService]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadShortcuts };
};
