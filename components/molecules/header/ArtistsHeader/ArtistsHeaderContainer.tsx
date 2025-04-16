import Header from '../Header';
import localize from '@/localize';

const ArtistsHeaderContainer = () => {
  const title = localize('artists');

  return <Header title={title} />;
};

export default ArtistsHeaderContainer;
