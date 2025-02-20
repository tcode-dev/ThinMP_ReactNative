import { useCallback } from 'react';
import localize from '@/localize';
import { Href, useRouter } from 'expo-router';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { ShortcutCategory } from '@/type/Entity';
import { ShortcutRepository } from '@/repository/ShortcutRepository';

export const useContextMenu = ({ category, id }: ContextMenuProps) => {
  const router = useRouter();

  const playlistRegisterBuilder = {
    label: localize('playlistAdd'),
    callback: () => {
      router.push(`/playlists/add/${id}` as Href);
    },
  };

  const favoriteArtistBuilder = useCallback(() => {
    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (favoriteArtistRepository.existsFavoriteArtist(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteArtistRepository.deleteFavoriteArtist(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteArtistRepository.addFavoriteArtist(id) };
    };
  }, [id]);
  const favoriteSongBuilder = useCallback(() => {
    const favoriteSongRepository = new FavoriteSongRepository();

    if (favoriteSongRepository.existsFavoriteSong(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteSongRepository.deleteFavoriteSong(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteSongRepository.addFavoriteSong(id) };
    }
  }, [id]);
  const useShortcutBuilder = useCallback((id: string, category: ShortcutCategory) => {
    const shortcutRepository = new ShortcutRepository();

    if (shortcutRepository.existsShortcut(id, category)) {
      return { label: localize('shortcutRemove'), callback: () => shortcutRepository.deleteShortcut(id, category) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => shortcutRepository.addShortcut(id, category) };
    }
  }, [id]);

  if (category === ContextMenuCategory.FavoriteArtist) {
    return favoriteArtistBuilder();
  } else if (category === ContextMenuCategory.FavoriteSong) {
    return favoriteSongBuilder();
  } else if (category == ContextMenuCategory.ShortcutArtist) {
    return useShortcutBuilder(id, ShortcutCategory.Artist);
  } else if (category == ContextMenuCategory.ShortcutAlbum) {
    return useShortcutBuilder(id, ShortcutCategory.Album);
  } else if (category == ContextMenuCategory.ShortcutPlaylist) {
    return useShortcutBuilder(id, ShortcutCategory.Playlist);
  } else if (category == ContextMenuCategory.PlaylistRegister) {
    return playlistRegisterBuilder;
  } else {
    throw new Error('Invalid category');
  }
};
