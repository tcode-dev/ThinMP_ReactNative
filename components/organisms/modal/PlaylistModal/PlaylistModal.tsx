import PlaylistModalContainer from './PlaylistModalContainer';
import { usePlaylistModalStore } from '@/store/playlistModalStore';

const PlaylistModal = () => {
  const { state } = usePlaylistModalStore();

  if (!state.isOpen) return null;

  return <PlaylistModalContainer id={state.id} />;
};

export default PlaylistModal;
