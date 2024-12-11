import Audio from 'audio';
import NextButtonPresenter, { Props as NextButtonPresenterProps } from './NextButtonPresenter';

type Props = Partial<Pick<NextButtonPresenterProps, 'size'>>;

const NextButtonContainer: React.FC<Props> = ({ size = 50 }) => {
  const onPress = () => {
    Audio.next();
  };

  return <NextButtonPresenter size={size} onPress={onPress} />;
};

export default NextButtonContainer;
