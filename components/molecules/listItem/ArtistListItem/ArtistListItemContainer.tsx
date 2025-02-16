import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import ArtistListItemPresenter from './ArtistListItemPresenter';
import localize from '@/localize';
import { ArtistModel } from '@/model/ArtistModel';
import { addFavoriteArtist, deleteFavoriteArtist, existsFavoriteArtist } from '@/repository/FavoriteArtistRepository';
import { addShortcut, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';
import { ShortcutCategory } from '@/type/Entity';


const ArtistListItemContainer: React.FC<ArtistModel> = (props) => {
  const href = `/artists/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(props.id, ShortcutCategory.Artist)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(props.id, ShortcutCategory.Artist) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(props.id, ShortcutCategory.Artist) };
    }
  }, [props.id]);
  const favoriteBuilder = useCallback(() => {
    if (existsFavoriteArtist(props.id)) {
      return { label: localize('favoriteRemove'), callback: () => deleteFavoriteArtist(props.id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => addFavoriteArtist(props.id) };
    }
  }, [props.id]);
  const builders = [shortcutBuilder, favoriteBuilder];

  return <ArtistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default ArtistListItemContainer;
