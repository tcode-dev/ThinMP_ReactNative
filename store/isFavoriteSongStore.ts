import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { usePlaybackStore } from './playbackStore';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';

const isFavoriteSongAtom = atom<boolean>(false);

export const useIsFavoriteSongStore = () => {
  const [state, setState] = useAtom(isFavoriteSongAtom);
  const { state: playbackState } = usePlaybackStore();
  const loadFavoriteSong = useCallback(async (): Promise<void> => {
    if (!playbackState.isReady) return;

    const favoriteSongRepository = new FavoriteSongRepository();
    const exists = favoriteSongRepository.existsFavoriteSong(playbackState.value.id);

    setState(exists);
  }, [playbackState]);
  const toggle = useCallback(() => {
    if (!playbackState.isReady) return;

    const favoriteSongRepository = new FavoriteSongRepository();

    if (state) {
      favoriteSongRepository.deleteFavoriteSong(playbackState.value.id);
      setState(false);
    } else {
      favoriteSongRepository.addFavoriteSong(playbackState.value.id);
      setState(true);
    }
  }, [state, setState]);

  useEffect(() => {
    loadFavoriteSong();
  }, [playbackState]);

  return { state, toggle };
};
