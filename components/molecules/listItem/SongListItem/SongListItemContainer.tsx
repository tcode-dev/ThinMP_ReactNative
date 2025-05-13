import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { Play } from '@/type/Audio';

type Props = {
  index: number;
  play: Play;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'>;

const SongListItemContainer: React.FC<Props> = ({ play, index, ...props }) => {
  const color = useThemeColor();
  const handlePress = useCallback(() => {
    play(index);
  }, [index, play]);
  const list: ContextMenuProps[] = [
    { category: ContextMenuCategory.PlaylistAdd, id: props.id },
    { category: ContextMenuCategory.FavoriteSong, id: props.id },
  ];

  return <SongListItemPresenter onPress={handlePress} list={list} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
