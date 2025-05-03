import SongEditListPresenter from './SongEditListPresenter';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongEditListContainer = () => {
  const { state, removeSong } = usePlaylistSongsStore();

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} />;
};

export default PlaylistSongEditListContainer;
