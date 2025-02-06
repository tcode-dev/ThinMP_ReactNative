import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';
import { addShortcut, Category, deleteShortcut, existsShortcut } from '@/repository/ShortcutRepository';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const playlistId = props.id as unknown as string;
  const href = `/playlists/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsShortcut(playlistId, Category.Playlist)) {
      return { label: localize('shortcutRemove'), callback: () => deleteShortcut(playlistId, Category.Playlist) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => addShortcut(playlistId, Category.Playlist) };
    }
  }, [playlistId]);
  const builders = [shortcutBuilder];

  return <PlaylistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default PlaylistListItemContainer;
