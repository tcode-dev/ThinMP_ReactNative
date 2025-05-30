import { useCallback } from 'react';
import NextButtonPresenter, { Props as NextButtonPresenterProps } from './NextButtonPresenter';
import Audio from 'audio';

type Props = Partial<Pick<NextButtonPresenterProps, 'buttonSize' | 'iconSize'>>;

const NextButtonContainer: React.FC<Props> = ({ buttonSize = 50, iconSize = 50 }) => {
  const handlePress = useCallback(() => {
    Audio.next();
  }, []);

  return <NextButtonPresenter buttonSize={buttonSize} iconSize={iconSize} onPress={handlePress} />;
};

export default NextButtonContainer;
