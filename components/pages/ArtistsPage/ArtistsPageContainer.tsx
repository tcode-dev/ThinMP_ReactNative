import { useEffect } from 'react';
import ArtistsPagePresenter from './ArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const ArtistsPageContainer = () => {
  const { fetchAllArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();
  }, [fetchAllArtists]);

  return <ArtistsPagePresenter />;
};

export default ArtistsPageContainer;
