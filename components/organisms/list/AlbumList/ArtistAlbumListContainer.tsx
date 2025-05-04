import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useArtistAlbumsStore } from '@/store/artistAlbumsStore';

const ArtistAlbumListContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadAlbums, resetAlbums } = useArtistAlbumsStore();

  useEffect(() => {
    loadAlbums(id);

    return () => {
      resetAlbums();
    };
  }, [id, loadAlbums, resetAlbums]);

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default ArtistAlbumListContainer;
