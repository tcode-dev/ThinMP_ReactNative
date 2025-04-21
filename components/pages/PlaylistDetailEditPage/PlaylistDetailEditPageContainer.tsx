import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { useSongsStore } from '@/store/songsStore';

const PlaylistDetailEditPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { loadPlaylistSongs, resetSongs } = useSongsStore();

  useFocusEffect(
    useCallback(() => {
      loadPlaylistSongs(id);

      return () => {
        resetSongs();
      };
    }, [id, loadPlaylistSongs, resetSongs])
  );

  return <PlaylistDetailEditPagePresenter />;
};

export default PlaylistDetailEditPageContainer;
