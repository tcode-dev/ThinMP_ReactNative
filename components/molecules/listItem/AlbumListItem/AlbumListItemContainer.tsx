import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import localize from '@/localize';
import { addShortcut, Category, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';

type Props = Omit<AlbumListItemPresenterProps, 'href' | 'onPress' | 'builders'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const href = `/albums/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(props.id, Category.Album)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(props.id, Category.Album) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(props.id, Category.Album) };
    }
  }, [props.id]);
  const builders = [shortcutBuilder];

  return <AlbumListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default AlbumListItemContainer;
