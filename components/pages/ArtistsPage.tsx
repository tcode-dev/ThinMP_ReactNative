import { useEffect } from 'react';
import useArtistsStore from '@/store/artistsStore';
import ArtistsTemplate from '@/components/templates/ArtistsTemplate/ArtistsTemplatePresenter';

const ArtistsPage = () => {
  const { fetchAllArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();
  }, []);

  return <ArtistsTemplate />;
};

export default ArtistsPage;
