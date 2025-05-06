import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainEditPageContainer = () => {
  const { loadVisibility, resetVisibility } = useVisibilityStore();

  useFocusEffect(
    useCallback(() => {
      loadVisibility();
    }, [loadVisibility]),
  );

  useEffect(
    () => () => {
      resetVisibility();
    },
    [resetVisibility],
  );

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
