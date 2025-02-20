import { usePlaylistModalStore } from '@/store/playlistModalStore';
import PlaylistModalContainer from './PlaylistModalContainer';

const PlaylistModal = () => {
  const { state } = usePlaylistModalStore();

  if (!state.isOpen) return null;

  return <PlaylistModalContainer id={state.id} />;
};

export default PlaylistModal;
