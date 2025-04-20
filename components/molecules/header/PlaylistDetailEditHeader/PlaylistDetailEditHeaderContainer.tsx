import { useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { useSongsStore } from '@/store/songsStore';

const PlaylistDetailEditHeaderContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: songsState } = useSongsStore();
  const { state: playlistStore } = usePlaylistDetailStore();
  const done = useCallback(() => {
    if (!songsState.isReady) return;
    if (!playlistStore.isReady) return;

    const playlistRepository = new PlaylistRepository();
    const ids = songsState.value.map((song) => song.id);

    playlistRepository.updatePlaylist(parseInt(id, 10), playlistStore.value?.name ?? '', ids);
  }, [songsState, playlistStore, id]);

  return <EditHeader done={done} />;
};

export default PlaylistDetailEditHeaderContainer;
