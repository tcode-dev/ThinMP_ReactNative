import AlbumListItemPresenter from './AlbumListItemPresenter';
import { Props } from './AlbumListItemPresenter';

const AlbumListItemContainer: React.FC<Props> = (props) => {
  return <AlbumListItemPresenter {...props} />;
}

export default AlbumListItemContainer;
