import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import AlbumDetailTemplate from '@/components/templates/albums/AlbumDetailTemplate';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';

const AlbumDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchAlbumDetail, resetAlbumDetail } = useAlbumDetailStore();
  const { fetchAlbumSongs, resetSongs } = useSongsStore();

  useEffect(() => {
    fetchAlbumDetail(id);
    fetchAlbumSongs(id);

    return () => {
      resetAlbumDetail();
      resetSongs();
    }
  }, []);

  return <AlbumDetailTemplate />;
};

export default AlbumDetailPage;
