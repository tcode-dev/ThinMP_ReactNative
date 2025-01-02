import { useEffect } from 'react';
import ArtistsPagePresenter from './ArtistsPagePresenter';
import useArtistsStore from '@/store/artistsStore';

const ArtistsPageContainer = () => {
  const { fetchAllArtists, resetArtists } = useArtistsStore();

  useEffect(() => {
    fetchAllArtists();

    return () => {
      resetArtists();
    };
  }, []);

  return <ArtistsPagePresenter />;
};

export default ArtistsPageContainer;
