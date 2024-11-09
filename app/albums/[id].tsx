import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import AlbumDetailTemplate from '@/components/templates/albums/AlbumDetailTemplate';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';

const AlbumDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchAlbumDetail } = useAlbumDetailStore();
  const { fetchAlbumSongs } = useSongsStore();

  useEffect(() => {
    fetchAlbumDetail(id);
    fetchAlbumSongs(id);
  }, []);

  return <AlbumDetailTemplate />;
}

export default AlbumDetailPage;
