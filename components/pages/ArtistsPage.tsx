import ArtistsTemplate from '@/components/templates/ArtistsTemplate/ArtistsTemplateContainer';
import useArtistsStore from '@/store/artistsStore';
import { useEffect } from 'react';

const ArtistsPage = () => {
  const { fetchAllArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();
  }, []);

  return <ArtistsTemplate />;
};

export default ArtistsPage;
