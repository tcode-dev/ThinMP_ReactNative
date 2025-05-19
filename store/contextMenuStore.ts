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
  | { category: ContextMenuCategory.FavoriteArtist; id: string; isUpdate?: boolean }
  | { category: ContextMenuCategory.FavoriteArtistEdit; id?: never; isUpdate?: boolean }
  | { category: ContextMenuCategory.FavoriteSong; id: string; isUpdate?: boolean }
  | { category: ContextMenuCategory.FavoriteSongEdit; id?: never; isUpdate?: boolean }
  | { category: ContextMenuCategory.MainEdit; id?: never; isUpdate?: boolean }
  | { category: ContextMenuCategory.PlaylistAdd; id: string; isUpdate?: boolean }
  | { category: ContextMenuCategory.PlaylistRemove; id: number; isUpdate?: boolean }
  | { category: ContextMenuCategory.PlaylistsEdit; id?: never; isUpdate?: boolean }
  | { category: ContextMenuCategory.PlaylistEdit; id: number; isUpdate?: boolean }
  | { category: ContextMenuCategory.ShortcutAlbum; id: string; isUpdate?: boolean }
  | { category: ContextMenuCategory.ShortcutArtist; id: string; isUpdate?: boolean }
  | { category: ContextMenuCategory.ShortcutPlaylist; id: string; isUpdate?: boolean };
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
