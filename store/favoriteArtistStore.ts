import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { usePlaybackStore } from './playbackStore';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';

const favoriteArtistAtom = atom<boolean>(false);

export const useFavoriteArtistStore = () => {
  const [state, setState] = useAtom(favoriteArtistAtom);
  const { state: playbackState } = usePlaybackStore();
  const loadFavoriteArtist = useCallback(async (): Promise<void> => {
    if (!playbackState.isReady) return;

    const favoriteArtistRepository = new FavoriteArtistRepository();
    const exists = favoriteArtistRepository.existsFavoriteArtist(playbackState.value.artistId);

    setState(exists);
  }, [playbackState]);
  const toggleFavoriteArtist = useCallback(() => {
    if (!playbackState.isReady) return;

    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (state) {
      favoriteArtistRepository.deleteFavoriteArtist(playbackState.value.artistId);
      setState(false);
    } else {
      favoriteArtistRepository.addFavoriteArtist(playbackState.value.artistId);
      setState(true);
    }
  }, [state, setState]);

  useEffect(() => {
    loadFavoriteArtist();
  }, [playbackState]);

  return { state, toggleFavoriteArtist };
};
