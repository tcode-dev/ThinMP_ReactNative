import { useCallback, useEffect } from 'react';

import useSongsStore from '@/store/songsStore';
import Audio from 'audio';

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
