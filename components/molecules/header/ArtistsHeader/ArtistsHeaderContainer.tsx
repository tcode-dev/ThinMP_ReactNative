import localize from '@/localize';
import Header from '../Header';

const ArtistsHeaderContainer = () => {
  const title = localize('artists');

  return <Header title={title} />;
};

export default ArtistsHeaderContainer;
