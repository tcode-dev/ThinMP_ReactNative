import { useShortcutsStore } from '@/store/shortcutsStore';
import ShortcutEditListPresenter from './ShortcutEditListPresenter';

const ShortcutEditListContainer = () => {
  const { state, update } = useShortcutsStore();

  if (!state.isReady) return;

  return <ShortcutEditListPresenter shortcuts={state.value} onDragEnd={update} />;
};

export default ShortcutEditListContainer;
