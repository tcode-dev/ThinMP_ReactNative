import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';
import SongListPresenter from './SongListPresenter';
import { usePlayer } from '@/hooks/usePlayer';
import { useArtistSongsStore } from '@/store/artistSongsStore';

const ArtistSongListContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadSongs, resetSongs } = useArtistSongsStore();
  const { playArtistSongs } = usePlayer();
  const play = useCallback((index: number) => playArtistSongs(index, id), [id, playArtistSongs]);

  useEffect(() => {
    loadSongs(id);

    return () => {
      resetSongs();
    };
  }, [id, loadSongs, resetSongs])

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} play={play} />;
};

export default ArtistSongListContainer;
