import { router } from 'expo-router';
import { useCallback } from 'react';
import BackButtonPresenter from './BackButtonPresenter';

const BackButtonContainer = () => {
  const handlePress = useCallback(() => {
    router.back();
  }, []);

  return <BackButtonPresenter onPress={handlePress} />;
};

export default BackButtonContainer;
