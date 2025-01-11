import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withState } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import Audio, { AlbumProps } from 'audio';

const albumDetailAtom = atom<Result<AlbumProps>>(toLoading());

export const useAlbumDetailStore = () => {
  const [state, setState] = useAtom(albumDetailAtom);
  const fetchAlbumDetail = useCallback(
    async (id: string): Promise<void> => {
      await withState<AlbumProps>(() => Audio.getAlbumById(id), setState);
    },
    [setState],
  );
  const resetAlbumDetail = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, fetchAlbumDetail, resetAlbumDetail };
};
