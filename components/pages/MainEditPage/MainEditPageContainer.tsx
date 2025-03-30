import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useEffect } from 'react';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainEditPageContainer = () => {
  const { loadVisibility } = useVisibilityStore();
  const { loadMainMenuEdit } = useMainMenuEditStore();

  useEffect(() => {
    loadVisibility();
  }, [loadVisibility]);

  useEffect(() => {
    loadMainMenuEdit();
  }, [loadMainMenuEdit]);

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
