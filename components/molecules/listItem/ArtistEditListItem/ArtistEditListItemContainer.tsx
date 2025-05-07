import { useCallback } from 'react';
import ArtistEditListItemPresenter, { Props as ArtistListItemPresenterProps } from './ArtistEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ArtistModel } from '@/model/ArtistModel';

type Props = {
  remove: (id: string) => void;
} & ArtistModel &
  Pick<ArtistListItemPresenterProps, 'drag'>;

const ArtistEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const remove = useCallback(() => {
    props.remove(props.id);
  }, [props]);

  return <ArtistEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} />;
};

export default ArtistEditListItemContainer;
