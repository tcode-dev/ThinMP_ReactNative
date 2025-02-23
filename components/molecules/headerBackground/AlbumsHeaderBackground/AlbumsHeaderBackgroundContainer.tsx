import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const AlbumsHeaderBackgroundContainer = () => {
  const title = localize('albums');

  return <CustomHeaderBackground title={title} />;
};

export default AlbumsHeaderBackgroundContainer;
