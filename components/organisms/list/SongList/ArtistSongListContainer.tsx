import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { useArtistId } from '@/hooks/useArtistId';
import { usePlayer } from '@/hooks/usePlayer';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistSongListContainer = () => {
  const { artistId } = useArtistId();
  const { state, loadSongs, resetSongs } = useArtistSongsStore();
  const { playArtistSongs } = usePlayer();
  const play = useCallback((index: number) => playArtistSongs(index, artistId), [artistId, playArtistSongs]);

  useEffect(() => {
    loadSongs(artistId);

    return () => {
      resetSongs();
    };
  }, [artistId, loadSongs, resetSongs]);

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default ArtistSongListContainer;
