import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { getFavoriteArtists } from '@/repository/FavoriteArtistRepository';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistProps } from 'audio';

const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

export const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = useCallback(async (): Promise<void> => {
    await withState<ArtistProps[]>(() => Audio.getAllArtists(), setState);
  }, [setState]);
  const fetchFavoriteArtists = useCallback(async (): Promise<void> => {
    await withState<ArtistProps[]>(() => {
      const favoriteArtists = getFavoriteArtists();
      const artistIds = favoriteArtists.map((artist) => artist.id);

      return Audio.getArtistsByIds(artistIds);
    }, setState);
  }, [setState]);
  const resetArtists = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchAllArtists, fetchFavoriteArtists, resetArtists };
};
