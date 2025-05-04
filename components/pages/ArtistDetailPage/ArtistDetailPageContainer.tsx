import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useArtistAlbumsStore } from '@/store/artistAlbumsStore';
import { useArtistDetailStore } from '@/store/artistDetailStore';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: artistDetailState, loadArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState } = useArtistAlbumsStore();
  const { state: songsState } = useArtistSongsStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadArtistDetail(id);

      return () => {
        resetArtistDetail();
      };
    }, [loadArtistDetail, id, resetArtistDetail])
  );

  if (!artistDetailState.isReady || !artistDetailState.value) return null;

  const width = Dimensions.get('window').width;
  const description = albumsState.isReady && songsState.isReady ?`${albumsState.value.length} albums, ${songsState.value.length} songs`: '';

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} backgroundColor={color.background} />;
};

export default ArtistDetailPageContainer;
