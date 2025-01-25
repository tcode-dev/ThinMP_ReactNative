import MainHeaderPresenter from './MainHeaderPresenter';
import localize from '@/localize';

const MainHeaderContainer = () => {
  const title = localize('library');

  return <MainHeaderPresenter title={title} />;
};

export default MainHeaderContainer;
