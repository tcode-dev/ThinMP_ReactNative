import { useEffect } from 'react';
import PlaylistsPagePresenter from './PlaylistsPagePresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistsPageContainer = () => {
  const { fetchPlaylists } = usePlaylistsStore();

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  return <PlaylistsPagePresenter />;
};

export default PlaylistsPageContainer;
