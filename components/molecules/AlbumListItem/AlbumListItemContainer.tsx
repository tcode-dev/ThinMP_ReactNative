import { Href } from 'expo-router';
import AlbumListItemPresenter from './AlbumListItemPresenter';
import { Props } from './AlbumListItemPresenter';

const AlbumListItemContainer: React.FC<Props> = (props) => {
  const href = `/albums/${props.id}` as Href;

  return <AlbumListItemPresenter {...props} href={href} />;
};

export default AlbumListItemContainer;
