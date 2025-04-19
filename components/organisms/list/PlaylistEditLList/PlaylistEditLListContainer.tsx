import PlaylistEditLListPresenter from './PlaylistEditLListPresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistEditLListContainer = () => {
  const { state, update } = usePlaylistsStore();

  if (!state.isReady) return null;

  return <PlaylistEditLListPresenter playlists={state.value} onDragEnd={update} />;
};

export default PlaylistEditLListContainer;
