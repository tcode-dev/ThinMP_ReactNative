import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type PlaylistModalOpenProps = {
  isOpen: true;
  id: number;
};
export type PlaylistModalProps = {
  isOpen: false;
};
export type Props = PlaylistModalOpenProps | PlaylistModalProps;
const playlistModalAtom = atom<Props>({ isOpen: false });

export const usePlaylistModalStore = () => {
  const [state, setState] = useAtom(playlistModalAtom);
  const openPlaylistModal = useCallback((id: PlaylistModalOpenProps['id']) => setState({ isOpen: true, id }), [setState]);
  const closePlaylistModal = useCallback(() => setState({ isOpen: false }), [setState]);

  return { state, openPlaylistModal, closePlaylistModal };
};
