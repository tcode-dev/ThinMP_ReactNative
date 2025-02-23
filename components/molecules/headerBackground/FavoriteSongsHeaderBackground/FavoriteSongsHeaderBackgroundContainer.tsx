import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const FavoriteSongsHeaderBackgroundContainer = () => {
  const title = localize('favoriteSong');

  return <CustomHeaderBackground title={title} />;
};

export default FavoriteSongsHeaderBackgroundContainer;
