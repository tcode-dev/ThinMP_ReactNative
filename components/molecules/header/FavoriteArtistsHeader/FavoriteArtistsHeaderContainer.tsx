import Header from '../Header';
import localize from '@/localize';

const FavoriteArtistsHeaderContainer = () => {
  const title = localize('favoriteArtists');

  return <Header title={title} />;
};

export default FavoriteArtistsHeaderContainer;
