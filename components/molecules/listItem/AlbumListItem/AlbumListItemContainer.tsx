import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';

type Props = Omit<AlbumListItemPresenterProps, 'href' | 'onPress' | 'builders'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const href = `/albums/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useShortcutBuilder(props.id, ShortcutCategory.Album);
  const builders = [shortcutBuilder];

  return <AlbumListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default AlbumListItemContainer;
