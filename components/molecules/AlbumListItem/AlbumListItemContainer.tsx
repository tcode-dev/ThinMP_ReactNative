import AlbumListItemPresenter from './AlbumListItemPresenter';
import { AlbumProps } from 'audio';

const AlbumListItemContainer: React.FC<AlbumProps> = (props) => {
  return <AlbumListItemPresenter {...props} />;
}

export default AlbumListItemContainer;
