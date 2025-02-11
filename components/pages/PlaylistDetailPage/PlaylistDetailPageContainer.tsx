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
  const { state: playlistDetailState, fetchPlaylistDetail } = usePlaylistDetailStore();
  const { state: songsState, fetchPlaylistSongs } = useSongsStore();
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
      fetchPlaylistDetail(id);
      fetchPlaylistSongs(id);
    }, [fetchPlaylistDetail, fetchPlaylistSongs, id]),
  );

  if (!playlistDetailState.isReady) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const imageId = songsState.value.length > 0 ? songsState.value[0].albumId : '';

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} imageId={imageId} size={width} backgroundColor={color.background} play={play} />;
};

export default PlaylistDetailPageContainer;
