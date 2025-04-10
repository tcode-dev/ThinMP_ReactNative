import LoadingPresenter from './LoadingPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const LoadingContainer = () => {
  const color = useThemeColor();

  return <LoadingPresenter backgroundColor={color.background} iconColor={color.icon} />;
};

export default LoadingContainer;
