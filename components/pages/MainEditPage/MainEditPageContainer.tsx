import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useEffect } from 'react';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainEditPageContainer = () => {
  const { loadVisibility } = useVisibilityStore();
  const { loadMainMenuEdit } = useMainMenuEditStore();

  useEffect(() => {
    loadVisibility();
    loadMainMenuEdit();
  }, [loadVisibility, loadMainMenuEdit]);

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
