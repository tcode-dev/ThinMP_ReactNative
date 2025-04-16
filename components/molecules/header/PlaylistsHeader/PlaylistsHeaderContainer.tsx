import Header from '../Header';
import localize from '@/localize';

const PlaylistsHeaderContainer = () => {
  const title = localize('playlists');

  return <Header title={title} />;
};

export default PlaylistsHeaderContainer;
