import { useVisibilityStore } from '@/store/visibilityStore';
import EditHeader from '../EditHeader';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useCallback } from 'react';

const MainEditHeaderContainer = () => {
  const { saveMainMenu } = useMainMenuEditStore();
  const { saveVisibility } = useVisibilityStore();
  const done = useCallback(() => {
    saveVisibility();
    saveMainMenu();
  }, [saveVisibility, saveMainMenu]);

  return <EditHeader done={done} />;
};

export default MainEditHeaderContainer;
