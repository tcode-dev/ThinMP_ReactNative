import PlaylistsMenuButton from '../../button/menu/PlaylistsMenuButton';
import Header from '../Header';
import localize from '@/localize';

const PlaylistsHeaderContainer = () => {
  const title = localize('playlists');

  return <Header title={title} menu={<PlaylistsMenuButton />} />;
};

export default PlaylistsHeaderContainer;
