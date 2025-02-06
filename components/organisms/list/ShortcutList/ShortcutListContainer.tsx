import { Dimensions } from 'react-native';
import ShortcutListPresenter from './ShortcutListPresenter';
import { useShortcutsStore } from '@/store/shortcutsStore';

const ShortcutListContainer = () => {
  const { state } = useShortcutsStore();

  if (!state.isReady) return null;

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 20) / 2;
  const imageWidth = itemWidth - 20;

  return <ShortcutListPresenter shortcuts={state.value} itemWidth={itemWidth} imageWidth={imageWidth} />;
};

export default ShortcutListContainer;
