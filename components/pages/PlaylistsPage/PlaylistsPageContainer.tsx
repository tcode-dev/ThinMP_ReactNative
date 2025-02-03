import { useEffect } from 'react';
import PlaylistsPagePresenter from './PlaylistsPagePresenter';
import { usePlaylistsStore } from '@/store/playlistsStore';

const PlaylistsPageContainer = () => {
  const { fetchPlaylists, resetPlaylists } = usePlaylistsStore();

  useEffect(() => {
    fetchPlaylists();

    return () => {
      resetPlaylists();
    };
  }, [fetchPlaylists, resetPlaylists]);

  return <PlaylistsPagePresenter />;
};

export default PlaylistsPageContainer;
