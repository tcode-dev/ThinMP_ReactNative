import localize from '@/localize';
import Header from '../Header';

const SongsHeaderContainer = () => {
  const title = localize('songs');

  return <Header title={title} />;
};

export default SongsHeaderContainer;
