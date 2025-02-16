import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import PlaylistDetailPagePresenter from './PlaylistDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const PlaylistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const playlistId = parseInt(id, 10);
  const { state: playlistDetailState, loadPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState, loadPlaylistSongs } = useSongsStore();
  const color = useThemeColor();
  const play = useCallback(
    (index: number) => {
      if (!songsState.isReady) return null;

      const ids = songsState.value.map((song) => song.id);

      Audio.start(index, ids);
    },
    [songsState],
  );

  useFocusEffect(
    useCallback(() => {
      loadPlaylistDetail(playlistId);
      loadPlaylistSongs(playlistId);
    }, [loadPlaylistDetail, loadPlaylistSongs, playlistId]),
  );

  if (!playlistDetailState.isReady || playlistDetailState.value === null) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const imageId = songsState.value.length > 0 ? songsState.value[0].imageId : '';

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} imageId={imageId} size={width} backgroundColor={color.background} play={play} />;
};

export default PlaylistDetailPageContainer;
