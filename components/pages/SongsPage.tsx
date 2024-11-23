import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongsTemplate from '@/components/templates/SongsTemplate';

const SongsPage = () => {
  const { fetchAllSongs, resetSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();

    return () => {
      resetSongs();
    };
  }, []);

  return <SongsTemplate />;
};

export default SongsPage;
