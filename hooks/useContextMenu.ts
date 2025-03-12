import localize from '@/localize';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { ShortcutCategory } from '@/type/Entity';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { usePlaylistModalStore } from '@/store/playlistModalStore';
import { useRouter } from 'expo-router';

export const useContextMenu = ({ category, id }: ContextMenuProps) => {
  const router = useRouter();
  const { openPlaylistModal } = usePlaylistModalStore();
  const favoriteArtistBuilder = (id: string) => {
    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (favoriteArtistRepository.existsFavoriteArtist(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteArtistRepository.deleteFavoriteArtist(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteArtistRepository.addFavoriteArtist(id) };
    }
  };
  const favoriteSongBuilder = (id: string) => {
    const favoriteSongRepository = new FavoriteSongRepository();

    if (favoriteSongRepository.existsFavoriteSong(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteSongRepository.deleteFavoriteSong(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteSongRepository.addFavoriteSong(id) };
    }
  };
  const shortcutBuilder = (id: string, category: ShortcutCategory) => {
    const shortcutRepository = new ShortcutRepository();

    if (shortcutRepository.existsShortcut(id, category)) {
      return { label: localize('shortcutRemove'), callback: () => shortcutRepository.deleteShortcut(id, category) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => shortcutRepository.addShortcut(id, category) };
    }
  };
  const playlistRegister = {
    label: localize('playlistAdd'),
    callback: () => {
      openPlaylistModal(id!);
    },
  };
  const favoriteSongsEdit = {
    label: localize('edit'),
    callback: () => {
      router.push('/favoriteSongsEdit');
    },
  };

  if (category === ContextMenuCategory.FavoriteArtist) {
    return favoriteArtistBuilder(id!);
  } else if (category === ContextMenuCategory.FavoriteSong) {
    return favoriteSongBuilder(id!);
  } else if (category === ContextMenuCategory.FavoriteSongEdit) {
    return favoriteSongsEdit;
  } else if (category === ContextMenuCategory.ShortcutArtist) {
    return shortcutBuilder(id!, ShortcutCategory.Artist);
  } else if (category === ContextMenuCategory.ShortcutAlbum) {
    return shortcutBuilder(id!, ShortcutCategory.Album);
  } else if (category === ContextMenuCategory.ShortcutPlaylist) {
    return shortcutBuilder(id!, ShortcutCategory.Playlist);
  } else if (category === ContextMenuCategory.PlaylistRegister) {
    return playlistRegister;
  } else {
    throw new Error('Invalid category');
  }
};
