import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from './utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';
import { MainMenuConstant, VisibilityMapType } from '@/constants/MainMenuConstant';
import { getVisibilityMap, saveVisibilityMap } from '@/config/mainMenuConfig';

const visibilityAtom = atom<Result<VisibilityMapType>>(toLoading());

export const useVisibilityStore = () => {
  const [state, setState] = useAtom(visibilityAtom);
  const loadVisibility = useCallback(async (): Promise<void> => {
    await withStateAsync<VisibilityMapType>(() => getVisibilityMap(), setState);
  }, [setState]);
  const saveVisibility = useCallback(() => {
    if (!state.isReady) return;

    saveVisibilityMap(state.value);
  }, [state]);
  const toggle = useCallback((key: MainMenuConstant) => {
    if (!state.isReady) return;

    const value = state.value.get(key);

    if (value === undefined) return;

    const updatedMap = new Map(state.value);

    updatedMap.set(key, !value);
  
    setState(toSuccess(updatedMap));
  }, [state, setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadVisibility, saveVisibility, toggle };
};
