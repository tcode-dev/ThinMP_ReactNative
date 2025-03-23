import localize from '@/localize';
import Header from '../Header';

const MainEditHeaderContainer = () => {
  const title = localize('edit');

  return <Header title={title} />;
};

export default MainEditHeaderContainer;
