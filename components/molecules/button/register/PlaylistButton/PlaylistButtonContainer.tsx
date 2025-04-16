import { useCallback } from 'react';
import PlaylistButtonPresenter from './PlaylistButtonPresenter';
import { usePlaybackStore } from '@/store/playbackStore';
import { usePlaylistModalStore } from '@/store/playlistModalStore';

const PlaylistButtonContainer = () => {
  const { state } = usePlaybackStore();
  const { openPlaylistModal } = usePlaylistModalStore();
  const onPress = useCallback(() => {
    if (!state.isReady) return;
    openPlaylistModal(state.value.id);
  }, [openPlaylistModal, state]);

  return <PlaylistButtonPresenter onPress={onPress} />;
};

export default PlaylistButtonContainer;
