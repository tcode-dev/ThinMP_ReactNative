import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import PlaylistDetailPagePresenter from './PlaylistDetailPagePresenter';
import { useDevice } from '@/hooks/useDevice';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailPageContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state: playlistDetailState, loadPlaylistDetail, resetPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState } = usePlaylistSongsStore();
  const { shortestSide } = useDevice();
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

  if (!playlistDetailState.isReady || playlistDetailState.value === null) return null;

  const imageId = songsState.isReady && songsState.value.length > 0 ? songsState.value[0].imageId : '';

  return (
    <PlaylistDetailPagePresenter
      playlistDetail={playlistDetailState.value}
      imageId={imageId}
      linearGradientEndColor={color.linearGradientEnd}
      linearGradientStartColor={color.linearGradientStart}
      size={shortestSide}
    />
  );
};

export default PlaylistDetailPageContainer;
