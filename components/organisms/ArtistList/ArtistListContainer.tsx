import useArtistsStore from '@/store/artistsStore';
import ArtistListPresenter from './ArtistListPresenter';

const ArtistListContainer = () => {
  const { state } = useArtistsStore();

  if (state.isLoading) return null;
  if (!state.isSuccess) return null;

  return <ArtistListPresenter artists={state.value} />;
};

export default ArtistListContainer;
