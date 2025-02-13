import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { getFavoriteArtists } from '@/repository/FavoriteArtistRepository';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistProps } from 'audio';

const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

export const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistProps[]>(() => Audio.getAllArtists(), setState);
  }, [setState]);
  const fetchFavoriteArtists = useCallback(async (): Promise<void> => {
    await withStateAsync<ArtistProps[]>(() => {
      const favoriteArtists = getFavoriteArtists();
      const artistIds = favoriteArtists.map((artist) => artist.id);

      return Audio.getArtistsByIds(artistIds);
    }, setState);
  }, [setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchAllArtists, fetchFavoriteArtists };
};
