import PlaylistListPresenter from './PlaylistListPresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistListContainer = () => {
  const { state } = usePlaylistsStore();

  if (!state.isReady) return null;

  return <PlaylistListPresenter playlists={state.value} />;
};

export default PlaylistListContainer;
