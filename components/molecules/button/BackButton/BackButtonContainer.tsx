import BackButtonPresenter from './BackButtonPresenter';
import { useCallback } from 'react';
import { router } from 'expo-router';

const BackButtonContainer = () => {
  const onPress = useCallback(() => {
    router.back();
  }, []);

  return <BackButtonPresenter onPress={onPress} />;
};

export default BackButtonContainer;
