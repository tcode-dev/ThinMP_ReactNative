import { useCallback, useEffect } from 'react';
import Audio from 'audio';
import useSongsStore from '@/store/songsStore';
import SongsPagePresenter from './SongsPagePresenter';

const SongsPageContainer = () => {
  const { fetchAllSongs, resetSongs } = useSongsStore();
  const play = useCallback((index: number) => {
    Audio.startAllSongs(index);
  }, []);

  useEffect(() => {
    fetchAllSongs();

    return () => {
      resetSongs();
    };
  }, []);

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
