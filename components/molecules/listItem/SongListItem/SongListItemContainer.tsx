import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { Play } from '@/type/Audio';

type Props = Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'> &{
  index: number;
  isUpdate?: boolean;
  play: Play;
};

const SongListItemContainer: React.FC<Props> = ({ index, isUpdate, play, ...props }) => {
  const color = useThemeColor();
  const handlePress = useCallback(() => {
    play(index);
  }, [index, play]);
  const list: ContextMenuProps[] = [
    { category: ContextMenuCategory.PlaylistAdd, id: props.id, isUpdate },
    { category: ContextMenuCategory.FavoriteSong, id: props.id, isUpdate },
  ];

  return <SongListItemPresenter onPress={handlePress} list={list} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
