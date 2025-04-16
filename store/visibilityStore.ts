import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { withStateAsync } from './utils/withState';
import { getVisibilityMap, saveVisibilityMap } from '@/config/mainMenuConfig';
import { MainMenuConstant, VisibilityMapType } from '@/constants/MainMenuConstant';
import { Result, toLoading, toSuccess } from '@/type/Result';

export const visibilityAtom = atom<Result<VisibilityMapType>>(toLoading());

export const useVisibilityStore = () => {
  const [visibilityState, setState] = useAtom(visibilityAtom);
  const loadVisibility = useCallback(async (): Promise<void> => {
    await withStateAsync<VisibilityMapType>(getVisibilityMap, setState);
  }, [setState]);
  const saveVisibility = useCallback(() => {
    if (!visibilityState.isReady) return;

    saveVisibilityMap(visibilityState.value);
  }, [visibilityState]);
  const toggle = useCallback(
    (key: MainMenuConstant) => {
      if (!visibilityState.isReady) return;

      const value = visibilityState.value.get(key);

      if (value === undefined) return;

      const updatedMap = new Map(visibilityState.value);

      updatedMap.set(key, !value);

      setState(toSuccess(updatedMap));
    },
    [visibilityState, setState]
  );
  const resetVisibility = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { visibilityState, loadVisibility, saveVisibility, toggle, resetVisibility };
};
