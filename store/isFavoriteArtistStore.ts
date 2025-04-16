import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { usePlaybackStore } from './playbackStore';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';

const isFavoriteArtistAtom = atom<boolean>(false);

export const useIsFavoriteArtistStore = () => {
  const [state, setState] = useAtom(isFavoriteArtistAtom);
  const { state: playbackState } = usePlaybackStore();
  const loadIsFavoriteArtist = useCallback(async (): Promise<void> => {
    if (!playbackState.isReady) return;

    const favoriteArtistRepository = new FavoriteArtistRepository();
    const exists = favoriteArtistRepository.existsFavoriteArtist(playbackState.value.artistId);

    setState(exists);
  }, [playbackState, setState]);
  const toggle = useCallback(() => {
    if (!playbackState.isReady) return;

    const favoriteArtistRepository = new FavoriteArtistRepository();

    if (state) {
      favoriteArtistRepository.deleteFavoriteArtist(playbackState.value.artistId);
      setState(false);
    } else {
      favoriteArtistRepository.addFavoriteArtist(playbackState.value.artistId);
      setState(true);
    }
  }, [playbackState, state, setState]);

  useEffect(() => {
    loadIsFavoriteArtist();
  }, [loadIsFavoriteArtist, playbackState]);

  return { state, toggle };
};
