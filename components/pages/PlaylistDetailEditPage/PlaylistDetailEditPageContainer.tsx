import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import PlaylistDetailEditPagePresenter from './PlaylistDetailEditPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';

const PlaylistDetailEditPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadPlaylistDetail, update, resetPlaylistDetail } = usePlaylistDetailStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(parseInt(id, 10));

      return () => {
        resetPlaylistDetail();
      };
    }, [id, loadPlaylistDetail, resetPlaylistDetail])
  );

  if (!state.isReady || state.value == null) return;

  return <PlaylistDetailEditPagePresenter borderColor={color.border} name={state.value.name} onChangeText={update} />;
};

export default PlaylistDetailEditPageContainer;
