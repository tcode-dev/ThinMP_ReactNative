import localize from '@/localize';
import Header from '../Header';

const PlaylistsHeaderContainer = () => {
  const title = localize('playlists');

  return <Header title={title} />;
};

export default PlaylistsHeaderContainer;
