import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import ShortcutListItemPresenter, { Props as ShortcutListItemPresenterProps } from './ShortcutListItemPresenter';
import localize from '@/localize';
import { addShortcut, Category, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';

type Props = Omit<ShortcutListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'borderRadius'>;

const ShortcutListItemContainer: React.FC<Props> = (props) => {
  const path = props.category === Category.Artist ? 'artists' : props.category === Category.Album ? 'albums': props.category === Category.Playlist ? 'playlists' : '';
  const href = `/${path}/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(props.id, Category.Album)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(props.id, props.category) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(props.id, props.category) };
    }
  }, [props.category, props.id]);
  const builders = [shortcutBuilder];
  const borderRadius = props.category === Category.Artist ? props.imageWidth / 2 : 4;

  return <ShortcutListItemPresenter {...props} borderRadius={borderRadius} builders={builders} onPress={onPress} />;
};

export default ShortcutListItemContainer;
