import { useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useArtistId } from '@/hooks/useArtistId';
import { useArtistAlbumsStore } from '@/store/artistAlbumsStore';

const ArtistAlbumListContainer = () => {
  const { artistId } = useArtistId();
  const { state, loadAlbums, resetAlbums } = useArtistAlbumsStore();

  useEffect(() => {
    loadAlbums(artistId);

    return () => {
      resetAlbums();
    };
  }, [artistId, loadAlbums, resetAlbums]);

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default ArtistAlbumListContainer;
