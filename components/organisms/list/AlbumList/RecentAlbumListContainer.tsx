import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import AlbumListContainer from './AlbumListContainer';
import { useRecentAlbumsStore } from '@/store/recentAlbumsStore';

const RecentAlbumListContainer = () => {
  const { state, loadAlbums, resetAlbums } = useRecentAlbumsStore();

  useFocusEffect(
    useCallback(() => {
      loadAlbums();
    }, [loadAlbums])
  );

  useEffect(
    () => () => {
      resetAlbums();
    },
    [resetAlbums]
  );

  if (!state.isReady) return null;

  return <AlbumListContainer albums={state.value} isUpdate />;
};

export default RecentAlbumListContainer;
