import { useCallback } from 'react';
import SongEditListItemPresenter, { Props as SongListItemPresenterProps } from './SongEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SongModel } from '@/model/SongModel';

export type Props = {
  remove: (id: string) => void;
} & SongModel &
  Pick<SongListItemPresenterProps, 'drag'>;

const SongEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const remove = useCallback(() => {
    props.remove(props.id);
  }, [props]);

  return <SongEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} />;
};

export default SongEditListItemContainer;
