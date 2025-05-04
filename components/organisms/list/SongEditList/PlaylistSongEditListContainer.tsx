import SongEditListPresenter from './SongEditListPresenter';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongEditListContainer = () => {
  const { state, removeSong, update } = usePlaylistSongsStore();

  if (!state.isReady) return;

  return <SongEditListPresenter songs={state.value} remove={removeSong} update={update} />;
};

export default PlaylistSongEditListContainer;
