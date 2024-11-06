import SongListItemPresenter from './SongListItemPresenter';
import { SongProps } from 'audio';

const SongListItemContainer: React.FC<SongProps> = (props) => {
  return <SongListItemPresenter {...props} />;
}

export default SongListItemContainer;
