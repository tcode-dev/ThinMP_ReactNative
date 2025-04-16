import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAlbumsStore } from '@/store/albumsStore';
import { useArtistDetailStore } from '@/store/artistDetailStore';
import { useSongsStore } from '@/store/songsStore';

const ArtistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: artistDetailState, loadArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState, loadArtistAlbums, resetAlbums } = useAlbumsStore();
  const { state: songsState, loadArtistSongs, resetSongs } = useSongsStore();
  const { playArtistSongs } = usePlayer();
  const color = useThemeColor();
  const play = useCallback((index: number) => playArtistSongs(index, id), [id, playArtistSongs]);

  useFocusEffect(
    useCallback(() => {
      loadArtistDetail(id);
      loadArtistAlbums(id);
      loadArtistSongs(id);

      return () => {
        resetArtistDetail();
        resetAlbums();
        resetSongs();
      };
    }, [loadArtistAlbums, loadArtistDetail, loadArtistSongs, resetArtistDetail, resetAlbums, resetSongs, id])
  );

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const description = `${albumsState.value.length} albums, ${songsState.value.length} songs`;

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} backgroundColor={color.background} play={play} />;
};

export default ArtistDetailPageContainer;
