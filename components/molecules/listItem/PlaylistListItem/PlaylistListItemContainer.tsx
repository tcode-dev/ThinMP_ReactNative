import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import { PlaylistModel } from '@/model/PlaylistModel';
import { ShortcutCategory } from '@/type/Entity';
import { useShortcutBuilder } from '@/hooks/useShortcutBuilder';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = props.id as unknown as string;
  const href = `/playlists/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useShortcutBuilder(playlistId, ShortcutCategory.Playlist);
  const builders = [shortcutBuilder];

  return <PlaylistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default PlaylistListItemContainer;
