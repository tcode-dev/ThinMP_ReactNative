import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import PlaylistListItemPresenter from './PlaylistListItemPresenter';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';
import { existsPlaylist } from '@/repository/playlistRepository';

const PlaylistListItemContainer: React.FC<PlaylistModel> = (props) => {
  const href = `/playlists/${props.id}` as Href;
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push(href as Href);
  }, [href, router]);
  const shortcutBuilder = useCallback(() => {
    if (existsPlaylist(props.id)) {
      return { label: localize('shortcutRemove'), callback: () => {} };
    } else {
      return { label: localize('shortcutAdd'), callback: () => {} };
    }
  }, [props.id]);
  const builders = [shortcutBuilder];

  return <PlaylistListItemPresenter {...props} builders={builders} onPress={onPress} />;
};

export default PlaylistListItemContainer;
