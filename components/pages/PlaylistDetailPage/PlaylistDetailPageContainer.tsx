import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import PlaylistDetailPagePresenter from './PlaylistDetailPagePresenter';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { useShortestSide } from '@/hooks/useShortestSide';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailPageContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state: playlistDetailState, loadPlaylistDetail, resetPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState } = usePlaylistSongsStore();
  const color = useThemeColor();
  const { shortestSide } = useShortestSide();

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

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} imageId={imageId} size={shortestSide} backgroundColor={color.background} />;
};

export default PlaylistDetailPageContainer;
