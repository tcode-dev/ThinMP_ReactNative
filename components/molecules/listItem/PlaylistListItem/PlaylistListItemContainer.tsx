import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';
import { addShortcut, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';
import { ShortcutCategory } from '@/type/Entity';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = props.id as unknown as string;
  const href = `/playlists/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(playlistId, ShortcutCategory.Playlist)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(playlistId, ShortcutCategory.Playlist) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(playlistId, ShortcutCategory.Playlist) };
    }
  }, [playlistId]);
  const builders = [shortcutBuilder];

  return <PlaylistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default PlaylistListItemContainer;
