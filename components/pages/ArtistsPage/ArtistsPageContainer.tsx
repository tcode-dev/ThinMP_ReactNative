import { useEffect } from 'react';
import ArtistsPagePresenter from './ArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const ArtistsPageContainer = () => {
  const { fetchAllArtists, resetArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();

    return () => {
      resetArtists();
    };
  }, [fetchAllArtists, resetArtists]);

  return <ArtistsPagePresenter />;
};

export default ArtistsPageContainer;
