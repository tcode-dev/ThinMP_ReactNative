import localize from '@/localize';
import Header from '../Header';
import FavoriteSongsMenuButton from '@/components/molecules/button/menu/FavoriteSongsMenuButton';

const FavoriteSongsHeaderContainer = () => {
  const title = localize('favoriteSong');

  return <Header title={title} menu={<FavoriteSongsMenuButton />} />;
};

export default FavoriteSongsHeaderContainer;
