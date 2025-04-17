import FavoriteArtistsMenuButton from '../../button/menu/FavoriteArtistsMenuButton';
import Header from '../Header';
import localize from '@/localize';

const FavoriteArtistsHeaderContainer = () => {
  const title = localize('favoriteArtists');

  return <Header title={title} menu={<FavoriteArtistsMenuButton />} />;
};

export default FavoriteArtistsHeaderContainer;
