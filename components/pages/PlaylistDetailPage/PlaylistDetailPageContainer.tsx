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

  if (!playlistDetailState.isReady || playlistDetailState.value === null) return null;

  const width = Dimensions.get('window').width;

  return <PlaylistDetailPagePresenter playlistDetail={playlistDetailState.value} size={width} backgroundColor={color.background} play={play} />;
};

export default PlaylistDetailPageContainer;
