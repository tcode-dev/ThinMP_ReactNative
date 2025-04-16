import Header from '../Header';
import localize from '@/localize';

const SongsHeaderContainer = () => {
  const title = localize('songs');

  return <Header title={title} />;
};

export default SongsHeaderContainer;
