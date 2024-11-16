import ArtistsTemplate from '@/components/templates/ArtistsTemplate/ArtistsTemplatePresenter';
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
