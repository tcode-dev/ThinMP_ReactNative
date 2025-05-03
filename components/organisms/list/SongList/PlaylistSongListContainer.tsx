import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import SongListPresenter, { Props } from './SongListPresenter';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistSongListContainer: React.FC<Props> = (props) => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadSongs, resetSongs } = usePlaylistSongsStore();

  useEffect(() => {
    loadSongs(id);

    return () => {
      resetSongs();
    };
  }, [id, loadSongs, resetSongs])

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default PlaylistSongListContainer;
