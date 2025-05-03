import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumsStore } from '@/store/albumsStore';
import { useArtistDetailStore } from '@/store/artistDetailStore';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: artistDetailState, loadArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState, loadArtistAlbums, resetAlbums } = useAlbumsStore();
  const { state: songsState } = useArtistSongsStore();
  const color = useThemeColor();

  useFocusEffect(
    useCallback(() => {
      loadArtistDetail(id);
      loadArtistAlbums(id);

      return () => {
        resetArtistDetail();
        resetAlbums();
      };
    }, [loadArtistDetail, id, loadArtistAlbums, resetArtistDetail, resetAlbums])
  );

  if (!artistDetailState.isReady || !artistDetailState.value) return null;
  if (!albumsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const description = `${albumsState.value.length} albums, ${songsState.isReady ? songsState.value.length : ''} songs`;

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} backgroundColor={color.background} />;
};

export default ArtistDetailPageContainer;
