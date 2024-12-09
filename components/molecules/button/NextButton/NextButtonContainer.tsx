import Audio from 'audio';
import NextButtonPresenter from './NextButtonPresenter';

const NextButtonContainer = () => {
  const onPress = () => {
    Audio.next();
  };

  return <NextButtonPresenter onPress={onPress} />;
};

export default NextButtonContainer;
