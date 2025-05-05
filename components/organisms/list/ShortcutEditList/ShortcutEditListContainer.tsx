import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import ShortcutEditListPresenter from './ShortcutEditListPresenter';
import { useShortcutsStore } from '@/store/shortcutsStore';

const ShortcutEditListContainer = () => {
  const { state, loadShortcuts, resetShortcuts, update } = useShortcutsStore();

  useFocusEffect(
    useCallback(() => {
      loadShortcuts();
    }, [loadShortcuts]),
  );

  useEffect(
    () => () => {
      resetShortcuts();
    },
    [resetShortcuts],
  );

  if (!state.isReady) return;

  return <ShortcutEditListPresenter shortcuts={state.value} update={update} />;
};

export default ShortcutEditListContainer;
