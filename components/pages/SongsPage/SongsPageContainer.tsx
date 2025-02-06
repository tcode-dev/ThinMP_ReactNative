import { useCallback, useEffect } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const SongsPageContainer = () => {
  const { fetchAllSongs } = useSongsStore();
  const play = useCallback((index: number) => {
    Audio.startAllSongs(index);
  }, []);

  useEffect(() => {
    fetchAllSongs();
  }, [fetchAllSongs]);

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
