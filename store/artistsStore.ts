import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { ArtistProps } from 'audio';

const artistsAtom = atom<Result<ArtistProps[]>>(toLoading());

export const useArtistsStore = () => {
  const [state, setState] = useAtom(artistsAtom);
  const fetchAllArtists = useCallback(async (): Promise<void> => {
    await withState<ArtistProps[]>(() => Audio.getAllArtists(), setState);
  }, [setState]);
  const resetArtists = () => {
    setState(toLoading());
  };

  return { state, fetchAllArtists, resetArtists };
};
