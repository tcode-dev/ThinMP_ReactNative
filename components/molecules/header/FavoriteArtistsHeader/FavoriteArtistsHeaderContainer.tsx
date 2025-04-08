import localize from '@/localize';
import Header from '../Header';

const FavoriteArtistsHeaderContainer = () => {
  const title = localize('favoriteArtists');

  return <Header title={title} />;
};

export default FavoriteArtistsHeaderContainer;
