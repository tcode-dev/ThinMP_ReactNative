import { useCallback } from 'react';
import SongEditListItemPresenter, { Props as SongListItemPresenterProps } from './SongEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSongsStore } from '@/store/songsStore';

type Props = Omit<SongListItemPresenterProps, 'borderBottomColor' | 'remove'>;

const SongEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const { removeSong } = useSongsStore();
  const remove = useCallback(() => {
    removeSong(props.id);
  }, [removeSong, props.id]);

  return <SongEditListItemPresenter {...props} remove={remove} borderBottomColor={color.border} />;
};

export default SongEditListItemContainer;
