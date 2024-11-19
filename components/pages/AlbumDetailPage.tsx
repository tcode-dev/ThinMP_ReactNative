import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import AlbumDetailTemplate from '@/components/templates/AlbumDetailTemplate';

const AlbumDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const { fetchAlbumSongs, resetSongs } = useSongsStore();

  useFocusEffect(
    useCallback(() => {
      fetchAlbumDetail(id);
      fetchAlbumSongs(id);

      return () => {
        resetAlbumDetail();
        resetSongs();
      };
    }, [])
  );

  return <AlbumDetailTemplate />;
};

export default AlbumDetailPage;
