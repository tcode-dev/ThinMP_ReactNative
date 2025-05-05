import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useAllAlbumsStore } from '@/store/allAlbumsStore';

const AllAlbumListContainer = () => {
  const { state, loadAlbums, resetAlbums } = useAllAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      loadAlbums();
    }, [loadAlbums]),
  );

  useEffect(
    () => () => {
      resetAlbums();
    },
    [resetAlbums],
  );

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} />;
};

export default AllAlbumListContainer;
