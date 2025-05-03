import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import PlaylistDetailPagePresenter from './PlaylistDetailPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: playlistDetailState, loadPlaylistDetail, resetPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState } = usePlaylistSongsStore();
  const { playSongs } = usePlayer();
  const color = useThemeColor();
  const play = useCallback((index: number) => playSongs(index), [playSongs]);

  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(parseInt(id, 10));

      return () => {
        resetPlaylistDetail();
      };
    }, [loadPlaylistDetail, resetPlaylistDetail, id])
  );

  if (!playlistDetailState.isReady || playlistDetailState.value === null) return null;

  const width = Dimensions.get('window').width;
  const imageId = songsState.isReady && songsState.value.length > 0 ? songsState.value[0].imageId : '';

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} imageId={imageId} size={width} backgroundColor={color.background} play={play} />;
};

export default PlaylistDetailPageContainer;
