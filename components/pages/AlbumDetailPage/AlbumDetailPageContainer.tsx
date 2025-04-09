import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumDetailStore } from '@/store/albumDetailStore';
import { useSongsStore } from '@/store/songsStore';
import { usePlayer } from '@/hooks/usePlayer';

const AlbumDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: albumDetailState, loadAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const { loadAlbumSongs, resetSongs } = useSongsStore();
  const { playAlbumSongs } = usePlayer();
  const color = useThemeColor();
  const play = useCallback((index: number) => playAlbumSongs(index, id), [id]);

  useFocusEffect(
    useCallback(() => {
      loadAlbumDetail(id);
      loadAlbumSongs(id);

      return () => {
        resetAlbumDetail();
        resetSongs();
      };
    }, [loadAlbumDetail, loadAlbumSongs, resetSongs, id])
  );

  if (!albumDetailState.isReady) return null;

  const width = Dimensions.get('window').width;

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={width} backgroundColor={color.background} play={play} />;
};

export default AlbumDetailPageContainer;
