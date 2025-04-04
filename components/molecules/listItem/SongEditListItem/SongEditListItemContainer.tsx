import { useCallback } from 'react';
import SongEditListItemPresenter, { Props as SongListItemPresenterProps } from './SongEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSongsStore } from '@/store/songsStore';
import { SongModel } from '@/model/SongModel';

type Props = SongModel & Pick<SongListItemPresenterProps, 'drag'>;

const SongEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const { removeSong } = useSongsStore();
  const remove = useCallback(() => {
    removeSong(props.id);
  }, [removeSong, props.id]);

  return <SongEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} />;
};

export default SongEditListItemContainer;
