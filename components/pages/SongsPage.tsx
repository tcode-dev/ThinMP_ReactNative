import { useEffect } from 'react';
import useSongsStore from '@/store/songsStore';
import SongsTemplate from '@/components/templates/SongsTemplate';

const SongsPage = () => {
  const { fetchAllSongs } = useSongsStore();

  useEffect(() => {
    fetchAllSongs();
  }, []);

  return <SongsTemplate />;
};

export default SongsPage;
