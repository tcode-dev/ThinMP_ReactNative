import { useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useRecentAlbumsStore } from '@/store/recentAlbumsStore';

const RecentAlbumListContainer = () => {
  const { state, loadAlbums, resetAlbums } = useRecentAlbumsStore();

  useEffect(() => {
    loadAlbums();

    return () => {
      resetAlbums();
    };
  }, [loadAlbums, resetAlbums]);

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default RecentAlbumListContainer;
