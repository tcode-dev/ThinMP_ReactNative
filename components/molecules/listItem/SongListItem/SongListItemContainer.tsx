import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useContextMenuStore } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';
import { Play } from '@/type/Audio';

type Props = {
  index: number;
  play: Play;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'>;

const SongListItemContainer: React.FC<Props> = ({ play, index, ...props }) => {
  const color = useThemeColor();
  const { disableOverlay } = useOverlayStore();
  const { resetContextMenu } = useContextMenuStore();
  const favoriteCallback = useCallback(() => {
    resetContextMenu();
    disableOverlay();
  }, [disableOverlay, resetContextMenu]);
  const playlistCallback = useCallback(() => {
    resetContextMenu();
    disableOverlay();
  }, [disableOverlay, resetContextMenu]);
  const onPress = useCallback(() => {
    play(index);
  }, [index, play]);
  const list = [{ label: 'お気に入り', callback: favoriteCallback }, { label: 'playlist', callback: playlistCallback }];

  return <SongListItemPresenter onPress={onPress} list={list} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
