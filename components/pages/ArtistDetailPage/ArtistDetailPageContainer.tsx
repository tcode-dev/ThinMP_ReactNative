import { Dimensions } from 'react-native';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';
import ArtistDetailPagePresenter from './ArtistDetailPagePresenter';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';

const ArtistDetailPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: artistDetailState, fetchArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState, fetchArtistAlbums, resetAlbums } = useAlbumsStore();
  const { state: songsState, fetchArtistSongs, resetSongs } = useSongsStore();
  const play = (index: number) => {};

  // ArtistDetailPage → AlbumDetailPage → back → ArtistDetailPageのような遷移をした場合、
  // 古いデータが一瞬表示されるため画面がフォーカスされたときにデータを再取得する
  useFocusEffect(
    useCallback(() => {
      fetchArtistDetail(id);
      fetchArtistSongs(id);
      fetchArtistAlbums(id);

      return () => {
        resetArtistDetail();
        resetAlbums();
        resetSongs();
      };
    }, [])
  );
  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const description = `${albumsState.value.length} albums, ${songsState.value.length} songs`;

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} play={play} />;
};

export default ArtistDetailPageContainer;
