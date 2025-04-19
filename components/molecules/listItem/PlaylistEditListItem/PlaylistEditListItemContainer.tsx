import { useCallback } from 'react';
import PlaylistEditListItemPresenter, { Props as PlaylistListItemPresenterProps } from './PlaylistEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { PlaylistModel } from '@/model/PlaylistModel';
import { usePlaylistsStore } from '@/store/playlistsStore';

type Props = PlaylistModel & Pick<PlaylistListItemPresenterProps, 'drag'>;

const PlaylistEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const { removePlaylist } = usePlaylistsStore();
  const remove = useCallback(() => {
    removePlaylist(props.id);
  }, [removePlaylist, props.id]);

  return <PlaylistEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} />;
};

export default PlaylistEditListItemContainer;
