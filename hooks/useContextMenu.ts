import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import localize from '@/localize';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { useFavoriteArtistsStore } from '@/store/favoriteArtistsStore';
import { usePlaylistModalStore } from '@/store/playlistModalStore';
import { usePlaylistsStore } from '@/store/playlistsStore';
import { useShortcutsStore } from '@/store/shortcutsStore';
import { ShortcutCategory } from '@/type/Entity';

export type MenuItem = {
  label: string;
  callback: () => void;
};

export const useContextMenu = ({ category, id, isUpdate }: ContextMenuProps): MenuItem | null => {
  const router = useRouter();
  const { openPlaylistModal } = usePlaylistModalStore();
  const { loadPlaylists } = usePlaylistsStore();
  const { loadShortcuts } = useShortcutsStore();
  const { loadArtists } = useFavoriteArtistsStore();
  const favoriteArtistBuilder = (id: string, isUpdate?: boolean) => {
    const favoriteArtistRepository = new FavoriteArtistRepository();

    try {
      if (favoriteArtistRepository.existsFavoriteArtist(id)) {
        return {
          label: localize('favoriteRemove'),
          callback: () => {
            favoriteArtistRepository.deleteFavoriteArtist(id);
            if (isUpdate) {
              loadArtists();
            }
          },
        };
      } else {
        return {
          label: localize('favoriteAdd'),
          callback: () => {
            favoriteArtistRepository.addFavoriteArtist(id);
            if (isUpdate) {
              loadArtists();
            }
          },
        };
      }
    } catch {
      return null;
    }
  };
  const favoriteSongBuilder = (id: string) => {
    const favoriteSongRepository = new FavoriteSongRepository();

    try {
      if (favoriteSongRepository.existsFavoriteSong(id)) {
        return { label: localize('favoriteRemove'), callback: () => favoriteSongRepository.deleteFavoriteSong(id) };
      } else {
        return { label: localize('favoriteAdd'), callback: () => favoriteSongRepository.addFavoriteSong(id) };
      }
    } catch {
      return null;
    }
  };
  const shortcutBuilder = (id: string, category: ShortcutCategory, isUpdate?: boolean) => {
    const shortcutRepository = new ShortcutRepository();

    try {
      if (shortcutRepository.existsShortcut(id, category)) {
        return {
          label: localize('shortcutRemove'),
          callback: () => {
            shortcutRepository.deleteShortcut(id, category);
            if (isUpdate) {
              loadShortcuts();
            }
          },
        };
      } else {
        return {
          label: localize('shortcutAdd'),
          callback: () => {
            shortcutRepository.addShortcut(id, category);
            if (isUpdate) {
              loadShortcuts();
            }
          },
        };
      }
    } catch {
      return null;
    }
  };
  const playlistEditBuilder = (id: number) => ({
    label: localize('edit'),
    callback: () => {
      router.push(`/playlists/${id}/edit`);
    },
  });
  const playlistRegisterBuilder = (id: string) => ({
    label: localize('playlistAdd'),
    callback: () => {
      openPlaylistModal(id);
    },
  });
  const favoriteSongsEdit = {
    label: localize('edit'),
    callback: () => {
      router.push('/favoriteSongsEdit');
    },
  };
  const favoriteArtistsEdit = {
    label: localize('edit'),
    callback: () => {
      router.push('/favoriteArtistsEdit');
    },
  };
  const playlistsEdit = {
    label: localize('edit'),
    callback: () => {
      router.push('/playlists/edit');
    },
  };
  const mainEdit = {
    label: localize('edit'),
    callback: () => {
      router.push('/mainEdit');
    },
  };
  const confirmRemovePlaylist = (id: number) => {
    Alert.alert(localize('playlist'), localize('playlistRemoveConfirm'), [
      {
        text: localize('cancel'),
      },
      {
        text: localize('playlistRemove'),
        onPress: () => {
          const playlistRepository = new PlaylistRepository();

          playlistRepository.deletePlaylist(id);
          loadPlaylists();
        },
      },
    ]);
  };
  const playlistRemoveBuilder = (id: number) => ({
    label: localize('playlistRemove'),
    callback: () => {
      confirmRemovePlaylist(id);
    },
  });

  if (category === ContextMenuCategory.PlaylistAdd) {
    return playlistRegisterBuilder(id);
  } else if (category === ContextMenuCategory.ShortcutArtist) {
    return shortcutBuilder(id, ShortcutCategory.Artist, isUpdate);
  } else if (category === ContextMenuCategory.ShortcutAlbum) {
    return shortcutBuilder(id, ShortcutCategory.Album, isUpdate);
  } else if (category === ContextMenuCategory.ShortcutPlaylist) {
    return shortcutBuilder(id, ShortcutCategory.Playlist, isUpdate);
  } else if (category === ContextMenuCategory.FavoriteArtist) {
    return favoriteArtistBuilder(id, isUpdate);
  } else if (category === ContextMenuCategory.FavoriteSong) {
    return favoriteSongBuilder(id);
  } else if (category === ContextMenuCategory.MainEdit) {
    return mainEdit;
  } else if (category === ContextMenuCategory.FavoriteArtistEdit) {
    return favoriteArtistsEdit;
  } else if (category === ContextMenuCategory.FavoriteSongEdit) {
    return favoriteSongsEdit;
  } else if (category === ContextMenuCategory.PlaylistsEdit) {
    return playlistsEdit;
  } else if (category === ContextMenuCategory.PlaylistEdit) {
    return playlistEditBuilder(id);
  } else if (category === ContextMenuCategory.PlaylistRemove) {
    return playlistRemoveBuilder(id);
  } else {
    throw new Error('Invalid category');
  }
};
