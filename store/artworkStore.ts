import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import Audio from 'audio';

type Props = Map<string, string | null>;

const artworkAtom = atom<Props>(new Map());

export const useArtworkStore = () => {
  const [state, setState] = useAtom(artworkAtom);
  const getArtwork = useCallback(async (id: string): Promise<string | null> => {
    const cache = state.get(id);

    if (cache !== undefined) {
      return cache;
    }

    const result = await Audio.getArtwork(id);

    setState(new Map(state.set(id, result)));

    return result;
  }, [state, setState]);

  const resetArtwork = useCallback(() => {
    setState(new Map());
  }, [setState]);

  return { getArtwork, resetArtwork };
};
