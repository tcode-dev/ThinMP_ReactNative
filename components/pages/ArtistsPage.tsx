import { useEffect } from 'react';
import useArtistsStore from '@/store/artistsStore';
import ArtistsTemplate from '@/components/templates/ArtistsTemplate';

const ArtistsPage = () => {
  const { fetchAllArtists, resetArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();

    return () => {
      resetArtists();
    };
  }, []);

  return <ArtistsTemplate />;
};

export default ArtistsPage;
