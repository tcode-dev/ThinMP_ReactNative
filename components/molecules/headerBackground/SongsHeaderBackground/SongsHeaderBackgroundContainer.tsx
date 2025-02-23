import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const SongsHeaderBackgroundContainer = () => {
  const title = localize('songs');

  return <CustomHeaderBackground title={title} />;
};

export default SongsHeaderBackgroundContainer;
