import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { useArtistId } from '@/hooks/useArtistId';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useArtistAlbumsStore } from '@/store/artistAlbumsStore';
import { useArtistDetailStore } from '@/store/artistDetailStore';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistDetailPageContainer = () => {
  const { artistId } = useArtistId();
  const { state: artistDetailState, loadArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState } = useArtistAlbumsStore();
  const { state: songsState } = useArtistSongsStore();
  const color = useThemeColor();
  const { shortestSide } = useDevice();

  useFocusEffect(
    useCallback(() => {
      loadArtistDetail(artistId);
    }, [artistId, loadArtistDetail])
  );

  useEffect(
    () => () => {
      resetArtistDetail();
    },
    [resetArtistDetail]
  );

  if (!artistDetailState.isReady || !artistDetailState.value) return null;

  const description = albumsState.isReady && songsState.isReady ? `${albumsState.value.length} albums, ${songsState.value.length} songs` : '';

  return (
    <ArtistDetailPagePresenter
      artistDetail={artistDetailState.value}
      description={description}
      linearGradientEndColor={color.linearGradientEnd}
      linearGradientStartColor={color.linearGradientStart}
      size={shortestSide}
    />
  );
};

export default ArtistDetailPageContainer;
