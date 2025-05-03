import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumDetailStore } from '@/store/albumDetailStore';

const AlbumDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: albumDetailState, loadAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadAlbumDetail(id);

      return () => {
        resetAlbumDetail();
      };
    }, [loadAlbumDetail, id, resetAlbumDetail])
  );

  if (!albumDetailState.isReady || !albumDetailState.value) return null;

  const width = Dimensions.get('window').width;

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={width} backgroundColor={color.background} />;
};

export default AlbumDetailPageContainer;
