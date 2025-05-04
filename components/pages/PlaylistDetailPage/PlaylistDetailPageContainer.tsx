import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import PlaylistDetailPagePresenter from './PlaylistDetailPagePresenter';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailPageContainer = () => {
  const { playlistId } = usePlaylistId();
  const { state: playlistDetailState, loadPlaylistDetail, resetPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState } = usePlaylistSongsStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(playlistId);

      return () => {
        resetPlaylistDetail();
      };
    }, [playlistId, loadPlaylistDetail, resetPlaylistDetail])
  );

  if (!playlistDetailState.isReady || playlistDetailState.value === null) return null;

  const width = Dimensions.get('window').width;
  const imageId = songsState.isReady && songsState.value.length > 0 ? songsState.value[0].imageId : '';

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} imageId={imageId} size={width} backgroundColor={color.background} />;
};

export default PlaylistDetailPageContainer;
