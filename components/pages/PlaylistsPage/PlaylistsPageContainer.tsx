import { useEffect } from 'react';
import PlaylistsPagePresenter from './PlaylistsPagePresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistsPageContainer = () => {
  const { loadPlaylists } = usePlaylistsStore();

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  return <PlaylistsPagePresenter />;
};

export default PlaylistsPageContainer;
