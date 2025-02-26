import localize from '@/localize';
import Header from '../Header';

const AlbumsHeaderContainer = () => {
  const title = localize('albums');

  return <Header title={title} />;
};

export default AlbumsHeaderContainer;
