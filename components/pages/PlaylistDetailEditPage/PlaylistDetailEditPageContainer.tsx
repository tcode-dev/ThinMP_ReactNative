import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { useSongsStore } from '@/store/songsStore';

const PlaylistDetailEditPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { loadPlaylistSongs, resetSongs } = useSongsStore();
  const { loadPlaylistDetail, resetPlaylistDetail } = usePlaylistDetailStore();
  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(parseInt(id, 10));
      loadPlaylistSongs(id);

      return () => {
        resetPlaylistDetail();
        resetSongs();
      };
    }, [id, loadPlaylistDetail, loadPlaylistSongs, resetPlaylistDetail, resetSongs])
  );

  return <PlaylistDetailEditPagePresenter />;
};

export default PlaylistDetailEditPageContainer;
