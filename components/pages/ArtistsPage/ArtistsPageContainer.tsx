import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import ArtistsPagePresenter from './ArtistsPagePresenter';
import { useArtistsStore } from '@/store/artistsStore';

const ArtistsPageContainer = () => {
  const { loadAllArtists, resetArtists } = useArtistsStore();

  useFocusEffect(
    useCallback(() => {
      loadAllArtists();

      return () => {
        resetArtists();
      };
    }, [loadAllArtists, resetArtists])
  );

  return <ArtistsPagePresenter />;
};

export default ArtistsPageContainer;
