import { useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import EditHeader from '../EditHeader';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { usePlaylistDetailStore } from '@/store/playlistDetailStore';
import { usePlaylistSongsStore } from '@/store/playlistSongsStore';

const PlaylistDetailEditHeaderContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state: songsState } = usePlaylistSongsStore();
  const { state: playlistDetailState } = usePlaylistDetailStore();
  const done = useCallback(() => {
    if (!songsState.isReady) return;
    if (!playlistDetailState.isReady) return;

    const playlistRepository = new PlaylistRepository();
    const ids = songsState.value.map((song) => song.id);

    playlistRepository.updatePlaylist(parseInt(id, 10), playlistDetailState.value?.name ?? '', ids);
  }, [songsState, playlistDetailState, id]);

  return <EditHeader done={done} />;
};

export default PlaylistDetailEditHeaderContainer;
