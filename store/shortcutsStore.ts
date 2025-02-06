import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { ShortcutModel } from '@/model/ShortcutModel';
import { getPlaylist, getPlaylistSong, Playlist } from '@/repository/playlistRepository';
import { Category, getShortcuts, Shortcut } from '@/repository/ShortcutRepository';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio from 'audio';

const shortcutsAtom = atom<Result<ShortcutModel[]>>(toLoading());

export const useShortcutsStore = () => {
  const [state, setState] = useAtom(shortcutsAtom);
  const fetchShortcuts = useCallback(async(): Promise<void> => {
    const shortcuts = getShortcuts();
    const shortcutModels = await Promise.all(shortcuts.map(async(shortcut) => {
      if (shortcut.category === Category.Artist) {
        return await getArtistDetail(shortcut);
      } else if (shortcut.category === Category.Album) {
        return await getAlbumDetail(shortcut);
      } else if (shortcut.category === Category.Playlist) {
        return await getPlaylistDetail(shortcut);
      }
    }));
    const filtered = shortcutModels.filter((shortcut) => shortcut !== undefined);

    setState(toSuccess(filtered));
  }, [setState]);
  const resetShortcuts = useCallback(() => {
    setState(toLoading());
  }, [setState]);
  const getArtistDetail = async (shortcut: Shortcut): Promise<ShortcutModel> => {
    const artist = await Audio.getArtistDetailById(shortcut.id);
    return {
      id: shortcut.id,
      name: artist.name,
      description: 'artist',
      category: shortcut.category,
      imageId: artist.imageId,
      order: shortcut.sort_order,
    };
  };
  const getAlbumDetail = async (shortcut: Shortcut): Promise<ShortcutModel> => {
    const album = await Audio.getAlbumById(shortcut.id);
    console.log(album);
    return {
      id: shortcut.id,
      name: album.name,
      description: 'album',
      category: shortcut.category,
      imageId: album.imageId,
      order: shortcut.sort_order,
    };
  };
  const getPlaylistDetail = async (shortcut: Shortcut): Promise<ShortcutModel> => {
    const playlistId = shortcut.id as unknown as Playlist['id'];
    const playlist = getPlaylist(playlistId);
    const playlistSong = getPlaylistSong(playlistId);
    const song = playlistSong ? await Audio.getSongById(playlistSong.song_id) : null;

    return {
      id: shortcut.id,
      name: playlist ? playlist.name : 'unknown',
      description: 'playlist',
      category: shortcut.category,
      imageId: song ? song.imageId : '',
      order: shortcut.sort_order,
    };
  }

  return { state, fetchShortcuts, resetShortcuts };
};
