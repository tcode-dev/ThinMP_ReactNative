import { Dimensions } from 'react-native';
import { useCallback } from 'react';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import Audio from 'audio';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const AlbumDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: albumDetailState, fetchAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const { fetchAlbumSongs, resetSongs } = useSongsStore();
  const color = useThemeColor();
  const play = (index: number) => {
    Audio.startAlbumSongs(index, id);
  };

  useFocusEffect(
    useCallback(() => {
      fetchAlbumDetail(id);
      fetchAlbumSongs(id);

      return () => {
        resetAlbumDetail();
        resetSongs();
      };
    }, [])
  );

  if (!albumDetailState.isReady) return null;

  const width = Dimensions.get('window').width;

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={width} backgroundColor={color.background} play={play} />;
};

export default AlbumDetailPageContainer;
