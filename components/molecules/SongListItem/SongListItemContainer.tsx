import usePermissionStore from '@/store/permissionStore';
import SongListItemPresenter from './SongListItemPresenter';
import { SongsProps } from 'audio';

const SongListItemContainer: React.FC<SongsProps> = (props) => {
  return <SongListItemPresenter {...props} />;
}

export default SongListItemContainer;
