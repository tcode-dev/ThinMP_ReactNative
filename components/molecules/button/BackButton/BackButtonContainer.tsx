import { router } from 'expo-router';
import { useCallback } from 'react';
import BackButtonPresenter from './BackButtonPresenter';

const BackButtonContainer = () => {
  const onPress = useCallback(() => {
    router.back();
  }, []);

  return <BackButtonPresenter onPress={onPress} />;
};

export default BackButtonContainer;
