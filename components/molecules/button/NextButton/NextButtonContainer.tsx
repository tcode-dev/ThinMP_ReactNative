import { useCallback } from 'react';

import Audio from 'audio';

import NextButtonPresenter, { Props as NextButtonPresenterProps } from './NextButtonPresenter';

type Props = Partial<Pick<NextButtonPresenterProps, 'buttonSize' | 'iconSize'>>;

const NextButtonContainer: React.FC<Props> = ({ buttonSize = 50, iconSize = 50 }) => {
  const onPress = useCallback(() => {
    Audio.next();
  }, []);

  return <NextButtonPresenter buttonSize={buttonSize} iconSize={iconSize} onPress={onPress} />;
};

export default NextButtonContainer;
