import ArtistListPresenter from './ArtistListPresenter';
import useArtistsStore from '@/store/artistsStore';

const ArtistListContainer = () => {
  const { state } = useArtistsStore();

  if (!state.isReady) return null;

  return <ArtistListPresenter artists={state.value} />;
};

export default ArtistListContainer;
