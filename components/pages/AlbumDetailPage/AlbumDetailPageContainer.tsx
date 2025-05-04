import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { Dimensions } from 'react-native';
import AlbumDetailPagePresenter from './AlbumDetailPagePresenter';
import { useAlbumId } from '@/hooks/useAlbumId';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumDetailStore } from '@/store/albumDetailStore';

const AlbumDetailPageContainer = () => {
  const { albumId } = useAlbumId();
  const { state: albumDetailState, loadAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadAlbumDetail(albumId);
    }, [albumId, loadAlbumDetail]),
  );

  useEffect(
    () => () => {
      resetAlbumDetail();
    },
    [resetAlbumDetail],
  );

  if (!albumDetailState.isReady || !albumDetailState.value) return null;

  const width = Dimensions.get('window').width;

  return <AlbumDetailPagePresenter albumDetail={albumDetailState.value} size={width} backgroundColor={color.background} />;
};

export default AlbumDetailPageContainer;
