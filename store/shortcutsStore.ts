import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { withStateAsync, withStateSync } from './utils/withState';
import { ShortcutModel } from '@/model/ShortcutModel';
import { ShortcutService } from '@/service/ShortcutService';
import { Result, toLoading, toSuccess } from '@/type/Result';

const shortcutsAtom = atom<Result<ShortcutModel[]>>(toLoading());

export const useShortcutsStore = () => {
  const [state, setState] = useAtom(shortcutsAtom);
  const shortcutService = useMemo(() => new ShortcutService(), []);
  const loadShortcuts = useCallback(async (): Promise<void> => {
    await withStateAsync<ShortcutModel[]>(() => shortcutService.getShortcuts(), setState);
  }, [setState, shortcutService]);
  const removeShortcut = useCallback(
    (id: string) => {
      if (!state.isReady) return;

      withStateSync<ShortcutModel[]>(() => state.value.filter((shortcut) => shortcut.id !== id), setState);
    },
    [state, setState]
  );
  const update = useCallback(
    ({ data }: { data: ShortcutModel[] }) => {
      setState(toSuccess(data));
    },
    [setState],
  );
  const resetShortcuts = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadShortcuts, removeShortcut, update, resetShortcuts };
};
