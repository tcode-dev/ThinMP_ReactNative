import localize from '@/localize';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { ShortcutCategory } from '@/type/Entity';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { usePlaylistModalStore } from '@/store/playlistModalStore';

export const useContextMenu = ({ category, id }: ContextMenuProps) => {
  const { openPlaylistModal } = usePlaylistModalStore(); 
  const favoriteArtistBuilder = () => {
    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (favoriteArtistRepository.existsFavoriteArtist(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteArtistRepository.deleteFavoriteArtist(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteArtistRepository.addFavoriteArtist(id) };
    };
  };
  const favoriteSongBuilder = () => {
    const favoriteSongRepository = new FavoriteSongRepository();

    if (favoriteSongRepository.existsFavoriteSong(id)) {
      return { label: localize('favoriteRemove'), callback: () => favoriteSongRepository.deleteFavoriteSong(id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => favoriteSongRepository.addFavoriteSong(id) };
    }
  };
  const useShortcutBuilder = (id: string, category: ShortcutCategory) => {
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
      openPlaylistModal(id);
    },
  };

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
    return playlistRegister;
  } else {
    throw new Error('Invalid category');
  }
};
