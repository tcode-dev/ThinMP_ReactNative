import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useShortcutsStore } from '@/store/shortcutsStore';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainEditHeaderContainer = () => {
  const { saveMainMenu } = useMainMenuEditStore();
  const { saveVisibility } = useVisibilityStore();
  const { state } = useShortcutsStore();
  const done = useCallback(() => {
    if (!state.isReady) return;

    saveVisibility();
    saveMainMenu();

    const shortcutRepository = new ShortcutRepository();
    const list = state.value.map(({ id, category }) => ({ id, category }));

    shortcutRepository.updateShortcuts(list);
  }, [state, saveVisibility, saveMainMenu]);

  return <EditHeader done={done} />;
};

export default MainEditHeaderContainer;
