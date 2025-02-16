import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import ShortcutListItemPresenter, { Props as ShortcutListItemPresenterProps } from './ShortcutListItemPresenter';
import localize from '@/localize';
import { addShortcut, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';
import { ShortcutCategory } from '@/type/Entity';

type Props = Omit<ShortcutListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'borderRadius'>;

const ShortcutListItemContainer: React.FC<Props> = (props) => {
  const path = props.category === ShortcutCategory.Artist ? 'artists' : props.category === ShortcutCategory.Album ? 'albums' : props.category === ShortcutCategory.Playlist ? 'playlists' : '';
  const href = `/${path}/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(props.id, ShortcutCategory.Album)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(props.id, props.category) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(props.id, props.category) };
    }
  }, [props.category, props.id]);
  const builders = [shortcutBuilder];
  const borderRadius = props.category === ShortcutCategory.Artist ? props.imageWidth / 2 : 4;

  return <ShortcutListItemPresenter {...props} borderRadius={borderRadius} builders={builders} onPress={onPress} />;
};

export default ShortcutListItemContainer;
