import { useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useAllAlbumsStore } from '@/store/allAlbumsStore';

const AllAlbumListContainer = () => {
  const { state, loadAlbums, resetAlbums } = useAllAlbumsStore();

  useEffect(() => {
    loadAlbums();

    return () => {
      resetAlbums();
    };
  }, [loadAlbums, resetAlbums]);

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default AllAlbumListContainer;
