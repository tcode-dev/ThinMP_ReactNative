import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { useSongsStore } from '@/store/songsStore';

const PlaylistDetailEditPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadPlaylistDetail, update, resetPlaylistDetail } = usePlaylistDetailStore();
  const { loadPlaylistSongs, resetSongs } = useSongsStore();
  const color = useThemeColor();

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

  if (!state.isReady || state.value == null) return;

  return <PlaylistDetailEditPagePresenter borderColor={color.border} name={state.value.name} onChangeText={update} />;
};

export default PlaylistDetailEditPageContainer;
