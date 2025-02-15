import { useCallback, useEffect } from 'react';
import SongsPagePresenter from './SongsPagePresenter';
import { useSongsStore } from '@/store/songsStore';
import Audio from 'audio';

const SongsPageContainer = () => {
  const { loadAllSongs } = useSongsStore();
  const play = useCallback((index: number) => {
    Audio.startAllSongs(index);
  }, []);

  useEffect(() => {
    loadAllSongs();
  }, [loadAllSongs]);

  return <SongsPagePresenter play={play} />;
};

export default SongsPageContainer;
