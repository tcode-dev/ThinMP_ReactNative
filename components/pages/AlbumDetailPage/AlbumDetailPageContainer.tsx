import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useAlbumId } from '@/hooks/useAlbumId';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumDetailStore } from '@/store/albumDetailStore';

const AlbumDetailPageContainer = () => {
  const { albumId } = useAlbumId();
  const { state: albumDetailState, loadAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const color = useThemeColor();
  const { shortestSide } = useDevice();

  useFocusEffect(
    useCallback(() => {
      loadAlbumDetail(albumId);
    }, [albumId, loadAlbumDetail])
  );

  useEffect(
    () => () => {
      resetAlbumDetail();
    },
    [resetAlbumDetail]
  );

  if (!albumDetailState.isReady || !albumDetailState.value) return null;

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={shortestSide} linearGradientEndColor={color.linearGradientEnd} linearGradientStartColor={color.linearGradientStart} />;
};

export default AlbumDetailPageContainer;
