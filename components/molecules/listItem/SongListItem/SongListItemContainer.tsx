import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Play } from '@/type/Audio';
import { ContextMenuCategory } from '@/store/contextMenuStore';

type Props = {
  index: number;
  play: Play;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'>;

const SongListItemContainer: React.FC<Props> = ({ play, index, ...props }) => {
  const color = useThemeColor();
  const onPress = useCallback(() => {
    play(index);
  }, [index, play]);
  const list = [
    { category: ContextMenuCategory.PlaylistRegister, id: props.id },
    { category: ContextMenuCategory.FavoriteSong, id: props.id },
  ];

  return <SongListItemPresenter onPress={onPress} list={list} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
