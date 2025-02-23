import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const FavoriteArtistsHeaderBackgroundContainer = () => {
  const title = localize('favoriteArtist');

  return <CustomHeaderBackground title={title} />;
};

export default FavoriteArtistsHeaderBackgroundContainer;
