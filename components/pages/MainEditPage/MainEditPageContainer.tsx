import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MainEditPagePresenter from './MainEditPagePresenter';
import { useVisibilityStore } from '@/store/visibilityStore';

const MainEditPageContainer = () => {
  const { loadVisibility, resetVisibility } = useVisibilityStore();

  useFocusEffect(
    useCallback(() => {
      loadVisibility();

      return () => {
        resetVisibility();
      };
    }, [loadVisibility, resetVisibility])
  );

  return <MainEditPagePresenter />;
};

export default MainEditPageContainer;
