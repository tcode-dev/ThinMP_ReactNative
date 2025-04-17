import { useCallback } from 'react';
import ArtistEditListItemPresenter, { Props as ArtistListItemPresenterProps } from './ArtistEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ArtistModel } from '@/model/ArtistModel';
import { useArtistsStore } from '@/store/artistsStore';

type Props = ArtistModel & Pick<ArtistListItemPresenterProps, 'drag'>;

const ArtistEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const { removeArtist } = useArtistsStore();
  const remove = useCallback(() => {
    removeArtist(props.id);
  }, [removeArtist, props.id]);

  return <ArtistEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} />;
};

export default ArtistEditListItemContainer;
