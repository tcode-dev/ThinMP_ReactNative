import { useEffect } from 'react';
import useArtistsStore from '@/store/artistsStore';
import ArtistsPagePresenter from './ArtistsPagePresenter';

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
