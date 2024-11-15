import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import ArtistDetailTemplate from '@/components/templates/ArtistDetailTemplate';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';

const ArtistDetailPage = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchArtistDetail, resetArtistDetail } = useArtistDetailStore();
  const { fetchArtistAlbums, resetAlbums } = useAlbumsStore();
  const { fetchArtistSongs, resetSongs } = useSongsStore();

  useEffect(() => {
    fetchArtistDetail(id);
    fetchArtistSongs(id);
    fetchArtistAlbums(id);

    return () => {
      resetArtistDetail();
      resetAlbums();
      resetSongs();
    };
  }, []);

  return <ArtistDetailTemplate />;
};

export default ArtistDetailPage;
