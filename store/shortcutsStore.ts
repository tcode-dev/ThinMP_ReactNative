import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { usePlaylistDetailStore } from './playlistDetailStore';
import { ShortcutModel } from '@/model/ShortcutModel';
import { Category, getShortcuts, Shortcut } from '@/repository/ShortcutRepository';
import { Result, toLoading, toSuccess } from '@/type/Result';
import Audio from 'audio';

const shortcutsAtom = atom<Result<ShortcutModel[]>>(toLoading());

export const useShortcutsStore = () => {
  const [state, setState] = useAtom(shortcutsAtom);
  const {getPlaylistDetail} = usePlaylistDetailStore();
  const getArtist = async (shortcut: Shortcut): Promise<ShortcutModel> => {
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
  const getAlbum = async (shortcut: Shortcut): Promise<ShortcutModel> => {
    const album = await Audio.getAlbumById(shortcut.id);

    return {
      id: shortcut.id,
      name: album.name,
      description: 'album',
      category: shortcut.category,
      imageId: album.imageId,
      order: shortcut.sort_order,
    };
  };
  const getPlaylist = useCallback(async (shortcut: Shortcut): Promise<ShortcutModel> => {
    const playlist = await getPlaylistDetail(shortcut.id);

    return {
      id: shortcut.id,
      name: playlist ? playlist.name : 'unknown',
      description: 'playlist',
      category: shortcut.category,
      imageId: playlist ? playlist.imageId : '',
      order: shortcut.sort_order,
    };
  }, [getPlaylistDetail]);
  const fetchShortcuts = useCallback(async (): Promise<void> => {
    const shortcuts = getShortcuts();
    const shortcutModels = await Promise.all(
      shortcuts.map(async (shortcut) => {
        if (shortcut.category === Category.Artist) {
          return await getArtist(shortcut);
        } else if (shortcut.category === Category.Album) {
          return await getAlbum(shortcut);
        } else if (shortcut.category === Category.Playlist) {
          return await getPlaylist(shortcut);
        }
      }),
    );
    const filtered = shortcutModels.filter((shortcut) => shortcut !== undefined);

    setState(toSuccess(filtered));
  }, [getPlaylist, setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchShortcuts };
};
