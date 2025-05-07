import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';

const PlaylistDetailEditPageContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state, loadPlaylistDetail, update, resetPlaylistDetail } = usePlaylistDetailStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(playlistId);
    }, [playlistId, loadPlaylistDetail])
  );

  useEffect(
    () => () => {
      resetPlaylistDetail();
    },
    [resetPlaylistDetail]
  );

  if (!state.isReady || state.value == null) return;

  return <PlaylistDetailEditPagePresenter borderColor={color.border} name={state.value.name} onChangeText={update} />;
};

export default PlaylistDetailEditPageContainer;
