import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import ShortcutListItemPresenter, { Props as ShortcutListItemPresenterProps } from './ShortcutListItemPresenter';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';

type Props = Omit<ShortcutListItemPresenterProps, 'href' | 'onPress' | 'builders' | 'borderRadius'>;

const ShortcutListItemContainer: React.FC<Props> = (props) => {
  const path = props.category === ShortcutCategory.Artist ? 'artists' : props.category === ShortcutCategory.Album ? 'albums' : props.category === ShortcutCategory.Playlist ? 'playlists' : '';
  const href = `/${path}/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useShortcutBuilder(props.id, props.category);
  const builders = [shortcutBuilder];
  const borderRadius = props.category === ShortcutCategory.Artist ? props.imageWidth / 2 : 4;

  return <ShortcutListItemPresenter {...props} borderRadius={borderRadius} builders={builders} onPress={onPress} />;
};

export default ShortcutListItemContainer;
