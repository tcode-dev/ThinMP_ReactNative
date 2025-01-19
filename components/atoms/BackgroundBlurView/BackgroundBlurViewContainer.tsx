import { Platform } from 'react-native';
import BackgroundBlurViewPresenter from './BackgroundBlurViewPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const BackgroundBlurViewContainer = () => {
  const color = useThemeColor();
  const style = {
    ...Platform.select({
      android: {
        backgroundColor: color.onBackground,
      },
    })
  };
  const intensity = Platform.select({
    android: undefined,
    ios: 100,
    default: undefined,
  });

  return <BackgroundBlurViewPresenter intensity={intensity} style={style} />;
};

export default BackgroundBlurViewContainer;
