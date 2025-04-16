import Header from '../Header';
import localize from '@/localize';

const AlbumsHeaderContainer = () => {
  const title = localize('albums');

  return <Header title={title} />;
};

export default AlbumsHeaderContainer;
