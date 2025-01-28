import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import ArtistListItemPresenter from './ArtistListItemPresenter';
import localize from '@/localize';
import { addFavoriteArtist, deleteFavoriteArtist, existsFavoriteArtist } from '@/repository/FavoriteArtistRepository';
import { ArtistProps } from 'audio';

const ArtistListItemContainer: React.FC<ArtistProps> = (props) => {
  const href = `/artists/${props.id}`;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);
  const favoriteBuilder = useCallback(() => {
    if (existsFavoriteArtist(props.id)) {
      return { label: localize('favoriteRemove'), callback: () => deleteFavoriteArtist(props.id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => addFavoriteArtist(props.id) };
    }
  }, [props.id]);
  const builders = [favoriteBuilder];

  return <ArtistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default ArtistListItemContainer;
