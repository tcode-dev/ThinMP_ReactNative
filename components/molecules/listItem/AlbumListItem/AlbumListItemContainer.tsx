import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import localize from '@/localize';
import { addFavoriteSong, deleteFavoriteSong, existsFavoriteSong } from '@/repository/FavoriteSongRepository';

type Props = Omit<AlbumListItemPresenterProps, 'href'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const href = `/albums/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsFavoriteSong(props.id)) {
      return { label: localize('shortcutRemove'), callback: () => deleteFavoriteSong(props.id) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addFavoriteSong(props.id) };
    }
  }, [props.id]);
  const builders = [shortcutBuilder];

  return <AlbumListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default AlbumListItemContainer;
