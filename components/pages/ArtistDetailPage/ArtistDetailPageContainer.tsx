import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumsStore } from '@/store/albumsStore';
import { useArtistDetailStore } from '@/store/artistDetailStore';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const ArtistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: artistDetailState, fetchArtistDetail } = useArtistDetailStore();
  const { state: albumsState, fetchArtistAlbums } = useAlbumsStore();
  const { state: songsState, fetchArtistSongs } = useSongsStore();
  const color = useThemeColor();
  const play = useCallback(
    (index: number) => {
      Audio.startArtistSongs(index, id);
    },
    [id],
  );

  useFocusEffect(
    useCallback(() => {
      fetchArtistDetail(id);
      fetchArtistSongs(id);
      fetchArtistAlbums(id);
    }, [fetchArtistAlbums, fetchArtistDetail, fetchArtistSongs, id]),
  );

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const description = `${albumsState.value.length} albums, ${songsState.value.length} songs`;

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} backgroundColor={color.background} play={play} />;
};

export default ArtistDetailPageContainer;
