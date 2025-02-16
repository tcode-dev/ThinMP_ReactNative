import { useCallback } from 'react';
import ArtistListItemPresenter from './ArtistListItemPresenter';
import localize from '@/localize';
import { ArtistModel } from '@/model/ArtistModel';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';
import { useNavigate } from '@/hooks/useNavigate';

const ArtistListItemContainer: React.FC<ArtistModel> = (props) => {
  const { navigate } = useNavigate('/artists/', props.id);
  const shortcutBuilder = useShortcutBuilder(props.id, ShortcutCategory.Artist);
  const favoriteBuilder = useCallback(() => {
    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (favoriteArtistRepository.existsFavoriteArtist(props.id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteArtistRepository.deleteFavoriteArtist(props.id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteArtistRepository.addFavoriteArtist(props.id) };
    }
  }, [props.id]);
  const builders = [shortcutBuilder, favoriteBuilder];

  return <ArtistListItemPresenter {...props} builders={builders} onPress={navigate} />;
};

export default ArtistListItemContainer;
