import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const ArtistsHeaderBackgroundContainer = () => {
  const title = localize('artists');

  return <CustomHeaderBackground title={title} />;
};

export default ArtistsHeaderBackgroundContainer;
