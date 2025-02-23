import localize from '@/localize';
import CustomHeaderBackground from '../CustomHeaderBackground';

const PlaylistsHeaderBackgroundContainer = () => {
  const title = localize('playlists');

  return <CustomHeaderBackground title={title} />;
};

export default PlaylistsHeaderBackgroundContainer;
