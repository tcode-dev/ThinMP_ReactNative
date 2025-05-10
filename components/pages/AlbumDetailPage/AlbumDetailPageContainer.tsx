import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useAlbumId } from '@/hooks/useAlbumId';
import { useShortestSide } from '@/hooks/useShortestSide';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumDetailStore } from '@/store/albumDetailStore';

const AlbumDetailPageContainer = () => {
  const { albumId } = useAlbumId();
  const { state: albumDetailState, loadAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const color = useThemeColor();
  const { shortestSide } = useShortestSide();

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

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={shortestSide} backgroundColor={color.background} />;
};

export default AlbumDetailPageContainer;
