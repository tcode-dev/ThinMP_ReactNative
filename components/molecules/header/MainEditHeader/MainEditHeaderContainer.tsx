import { useVisibilityStore } from '@/store/visibilityStore';
import EditHeader from '../EditHeader';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useCallback } from 'react';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { useShortcutsStore } from '@/store/shortcutsStore';

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
