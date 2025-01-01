import { atom, useAtom } from 'jotai';

import Audio from 'audio';

type Props = Map<string, string | null>;

const artworkAtom = atom<Props>(new Map());

const useArtworkStore = () => {
  const [state, setState] = useAtom(artworkAtom);
  const getArtwork = async (id: string): Promise<string | null> => {
    const cache = state.get(id);

    if (cache !== undefined) {
      return cache;
    }

    const result = await Audio.getArtwork(id);

    setState(new Map(state.set(id, result)));

    return result;
  };

  const resetArtwork = () => {
    setState(new Map());
  };

  return { getArtwork, resetArtwork };
};

export default useArtworkStore;
