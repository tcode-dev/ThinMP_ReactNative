import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import ArtistDetailTemplate from '@/components/templates/ArtistDetailTemplate';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';

const ArtistDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { fetchArtistAlbums, resetAlbums } = useAlbumsStore();
  const { fetchArtistSongs, resetSongs } = useSongsStore();

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

  return <ArtistDetailTemplate />;
};

export default ArtistDetailPage;
