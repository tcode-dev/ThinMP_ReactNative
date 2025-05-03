import SongListPresenter, { Props } from './SongListPresenter';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistSongListContainer: React.FC<Props> = (props) => {
  const { state } = useArtistSongsStore();

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default ArtistSongListContainer;
