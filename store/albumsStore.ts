import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { AudioConstants } from '@/constants/AudioConstants';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';

const albumsAtom = atom<Result<AlbumProps[]>>(toLoading());

export const useAlbumsStore = () => {
  const [state, setState] = useAtom(albumsAtom);
  const fetchAllAlbums = useCallback(async (): Promise<void> => {
    await withStateAsync<AlbumProps[]>(() => Audio.getAllAlbums(), setState);
  }, [setState]);
  const fetchArtistAlbums = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumProps[]>(() => Audio.getAlbumsByArtistId(id), setState);
    },
    [setState],
  );
  const fetchRecentAlbums = useCallback(async (): Promise<void> => {
    await withStateAsync<AlbumProps[]>(() => Audio.getRecentAlbums(AudioConstants.RecentlyAddedCount), setState);
  }, [setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchAllAlbums, fetchArtistAlbums, fetchRecentAlbums };
};
