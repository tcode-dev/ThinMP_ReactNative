import Header from '../Header';
import FavoriteSongsMenuButton from '@/components/molecules/button/menu/FavoriteSongsMenuButton';
import localize from '@/localize';

const FavoriteSongsHeaderContainer = () => {
  const title = localize('favoriteSongs');

  return <Header title={title} menu={<FavoriteSongsMenuButton />} />;
};

export default FavoriteSongsHeaderContainer;
