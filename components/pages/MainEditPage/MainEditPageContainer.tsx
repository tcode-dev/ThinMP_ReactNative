import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useEffect } from 'react';

const MainEditPageContainer = () => {
  const { loadMainMenuEdit } = useMainMenuEditStore();

  useEffect(() => {
    loadMainMenuEdit();
  }, [loadMainMenuEdit]);

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
