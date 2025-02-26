import localize from '@/localize';
import Header from '../Header';

const FavoriteArtistsHeaderContainer = () => {
  const title = localize('favoriteArtist');

  return <Header title={title} />;
};

export default FavoriteArtistsHeaderContainer;
