import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import localize from '@/localize';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';
import { usePlaylistModalStore } from '@/store/playlistModalStore';
import { usePlaylistsStore } from '@/store/playlistsStore';
import { ShortcutCategory } from '@/type/Entity';

export const useContextMenu = ({ category, id }: ContextMenuProps) => {
  const router = useRouter();
  const { openPlaylistModal } = usePlaylistModalStore();
  const { loadPlaylists } = usePlaylistsStore();
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
  const playlistEditBuilder = (id: string) => ({
    label: localize('edit'),
    callback: () => {
      router.push(`/playlists/${id}/edit`);
    },
  });
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
  const confirmRemovePlaylist = (id: string) => {
    Alert.alert(
      localize('playlist'),
      localize('playlistRemoveConfirm'),
      [
        {
          text: localize('cancel'),
        },
        {
          text: localize('playlistRemove'),
          onPress: () => {
            const playlistRepository = new PlaylistRepository();

            playlistRepository.deletePlaylist(parseInt(id, 10));
            loadPlaylists();
          },
        },
      ]
    );
  };
  const playlistRemove = {
    label: localize('playlistRemove'),
    callback: () => {
      confirmRemovePlaylist(id!);
    },
  };

  if (category === ContextMenuCategory.PlaylistAdd) {
    return playlistRegister;
  } else if (category === ContextMenuCategory.ShortcutArtist) {
    return shortcutBuilder(id!, ShortcutCategory.Artist);
  } else if (category === ContextMenuCategory.ShortcutAlbum) {
    return shortcutBuilder(id!, ShortcutCategory.Album);
  } else if (category === ContextMenuCategory.ShortcutPlaylist) {
    return shortcutBuilder(id!, ShortcutCategory.Playlist);
  } else if (category === ContextMenuCategory.FavoriteArtist) {
    return favoriteArtistBuilder(id!);
  } else if (category === ContextMenuCategory.FavoriteSong) {
    return favoriteSongBuilder(id!);
  } else if (category === ContextMenuCategory.MainEdit) {
    return mainEdit;
  } else if (category === ContextMenuCategory.FavoriteArtistEdit) {
    return favoriteArtistsEdit;
  } else if (category === ContextMenuCategory.FavoriteSongEdit) {
    return favoriteSongsEdit;
  } else if (category === ContextMenuCategory.PlaylistsEdit) {
    return playlistsEdit;
  } else if (category === ContextMenuCategory.PlaylistEdit) {
    return playlistEditBuilder(id!);
  } else if (category === ContextMenuCategory.PlaylistRemove) {
    return playlistRemove;
  } else {
    throw new Error('Invalid category');
  }
};
