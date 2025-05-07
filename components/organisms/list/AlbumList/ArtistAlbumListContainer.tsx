import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useArtistId } from '@/hooks/useArtistId';
import { useArtistAlbumsStore } from '@/store/artistAlbumsStore';

const ArtistAlbumListContainer = () => {
  const { artistId } = useArtistId();
  const { state, loadAlbums, resetAlbums } = useArtistAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      loadAlbums(artistId);
    }, [artistId, loadAlbums])
  );

  useEffect(
    () => () => {
      resetAlbums();
    },
    [resetAlbums]
  );

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default ArtistAlbumListContainer;
