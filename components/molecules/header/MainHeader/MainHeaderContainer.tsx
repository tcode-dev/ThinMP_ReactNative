import MainHeaderPresenter from './MainHeaderPresenter';
import localize from '@/localize';
import { useThemeColor } from '@/hooks/useThemeColor';

const MainHeaderContainer = () => {
  const title = localize('library');
  const color = useThemeColor();

  return <MainHeaderPresenter borderColor={color.border} title={title} />;
};

export default MainHeaderContainer;
