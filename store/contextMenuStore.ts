import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export enum ContextMenuCategory {
  FavoriteArtist,
  FavoriteArtistEdit,
  FavoriteSong,
  FavoriteSongEdit,
  MainEdit,
  PlaylistAdd,
  PlaylistRemove,
  PlaylistsEdit,
  PlaylistEdit,
  ShortcutAlbum,
  ShortcutArtist,
  ShortcutPlaylist,
}
export type ContextMenuProps = { category: ContextMenuCategory; id?: string };
export type ContextMenuOpenProps = {
  isOpen: true;
  list: ContextMenuProps[];
  position: { top: number; right: number };
};
export type ContextMenuCloseProps = {
  isOpen: false;
};
export type Props = ContextMenuOpenProps | ContextMenuCloseProps;

const contextMenuAtom = atom<Props>({ isOpen: false });

export const useContextMenuStore = () => {
  const [contextMenu, setState] = useAtom(contextMenuAtom);
  const openContextMenu = useCallback((props: Omit<ContextMenuOpenProps, 'isOpen'>) => setState({ ...props, isOpen: true }), [setState]);
  const closeContextMenu = useCallback(() => {
    setState({ isOpen: false });
  }, [setState]);

  return { contextMenu, openContextMenu, closeContextMenu };
};
