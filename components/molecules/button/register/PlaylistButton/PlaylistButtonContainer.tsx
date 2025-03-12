import { useCallback } from 'react';
import PlaylistButtonPresenter from './PlaylistButtonPresenter';
import { usePlaylistModalStore } from '@/store/playlistModalStore';
import { usePlaybackStore } from '@/store/playbackStore';

const PlaylistButtonContainer = () => {
  const { state } = usePlaybackStore();
  const { openPlaylistModal } = usePlaylistModalStore();
  const onPress = useCallback(() => {
    if (!state.isReady) return;
    openPlaylistModal(state.value.id);
  }, [state]);

  return <PlaylistButtonPresenter onPress={onPress} />;
};

export default PlaylistButtonContainer;
