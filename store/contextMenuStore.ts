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
export type ContextMenuProps =
  | { category: ContextMenuCategory.FavoriteArtist; id: string }
  | { category: ContextMenuCategory.FavoriteArtistEdit; id?: never }
  | { category: ContextMenuCategory.FavoriteSong; id: string }
  | { category: ContextMenuCategory.FavoriteSongEdit; id?: never }
  | { category: ContextMenuCategory.MainEdit; id?: never }
  | { category: ContextMenuCategory.PlaylistAdd; id: number }
  | { category: ContextMenuCategory.PlaylistRemove; id: number }
  | { category: ContextMenuCategory.PlaylistsEdit; id?: never }
  | { category: ContextMenuCategory.PlaylistEdit; id: number }
  | { category: ContextMenuCategory.ShortcutAlbum; id: string }
  | { category: ContextMenuCategory.ShortcutArtist; id: string }
  | { category: ContextMenuCategory.ShortcutPlaylist; id: string };
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
