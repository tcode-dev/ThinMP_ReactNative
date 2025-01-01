import { Href } from 'expo-router';

import AlbumListItemPresenter, { Props as AlbumListItemPresenterProps } from './AlbumListItemPresenter';

type Props = Omit<AlbumListItemPresenterProps, 'href'>;

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const href = `/albums/${props.id}` as Href;

  return <AlbumListItemPresenter {...props} href={href} />;
};

export default AlbumListItemContainer;
