import { useEffect } from 'react';
import ArtistsPagePresenter from './ArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const ArtistsPageContainer = () => {
  const { loadAllArtists } = useArtistsStore();

  useEffect(() => {
    loadAllArtists();
  }, [loadAllArtists]);

  return <ArtistsPagePresenter />;
};

export default ArtistsPageContainer;
