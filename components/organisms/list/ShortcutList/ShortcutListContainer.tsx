import ShortcutListPresenter from './ShortcutListPresenter';
import { useGridSize } from '@/hooks/useGridSize';
import { useShortcutsStore } from '@/store/shortcutsStore';

const ShortcutListContainer = () => {
  const { state } = useShortcutsStore();
  const { itemWidth, imageWidth, gridCount } = useGridSize();

  if (!state.isReady) return null;

  return <ShortcutListPresenter shortcuts={state.value} itemWidth={itemWidth} imageWidth={imageWidth} gridCount={gridCount} />;
};

export default ShortcutListContainer;
