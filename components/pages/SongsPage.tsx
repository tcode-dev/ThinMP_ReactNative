import SongsTemplate from '@/components/templates/SongsTemplate';
import useSongsStore from '@/store/songsStore';
import { useEffect } from 'react';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return <SongsTemplate />;
};

export default SongsPage;
