import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';

const albumDetailAtom = atom<Result<AlbumProps>>(toLoading());

export const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = useCallback(
    async (id: string): Promise<void> => {
      await withStateAsync<AlbumProps>(() => Audio.getAlbumById(id), setState);
    },
    [setState],
  );

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, fetchAlbumDetail };
};
