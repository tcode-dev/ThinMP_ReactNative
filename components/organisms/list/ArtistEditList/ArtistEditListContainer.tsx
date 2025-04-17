import ArtistEditListPresenter from './ArtistEditListPresenter';
import { useArtistsStore } from '@/store/artistsStore';

const ArtistEditListContainer = () => {
  const { state, update } = useArtistsStore();

  if (!state.isReady) return;

  return <ArtistEditListPresenter artists={state.value} onDragEnd={update} />;
};

export default ArtistEditListContainer;
