import { useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router';
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
  const { state: artistDetailState, fetchArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { state: albumsState, fetchArtistAlbums, resetAlbums } = useAlbumsStore();
  const { state: songsState, fetchArtistSongs, resetSongs } = useSongsStore();
  const navigation = useNavigation();
  const color = useThemeColor();
  const play = useCallback(
    (index: number) => {
      Audio.startArtistSongs(index, id);
    },
    [id],
  );

  // ArtistDetailPage → AlbumDetailPage → back → ArtistDetailPageのような遷移をした場合、
  // 古いデータが一瞬表示されるため画面がフォーカスされたときにデータを再取得する
  useFocusEffect(
    useCallback(() => {
      fetchArtistDetail(id);
      fetchArtistSongs(id);
      fetchArtistAlbums(id);

      // ユーザーが「戻る」操作を行ったときの処理
      const handleBeforeRemove = () => {
        resetArtistDetail();
        resetAlbums();
        resetSongs();
      };

      // expo-routerでmodalを表示している
      // modalを表示するときにページが初期化されmodalの下が表示されなくなるのでbeforeRemoveで初期化する
      navigation.addListener('beforeRemove', handleBeforeRemove);

      return () => {
        navigation.removeListener('beforeRemove', handleBeforeRemove);
      };
    }, [fetchArtistAlbums, fetchArtistDetail, fetchArtistSongs, id, navigation, resetAlbums, resetArtistDetail, resetSongs]),
  );

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  const width = Dimensions.get('window').width;
  const description = `${albumsState.value.length} albums, ${songsState.value.length} songs`;

  return <ArtistDetailPagePresenter artistDetail={artistDetailState.value} description={description} size={width} backgroundColor={color.background} play={play} />;
};

export default ArtistDetailPageContainer;
