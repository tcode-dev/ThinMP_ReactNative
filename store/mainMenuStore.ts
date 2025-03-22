import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import { SortListType } from '@/constants/MainMenuConstant';
import { getSortList } from '@/config/mainMenuConfig';

const mainMenuAtom = atom<Result<SortListType>>(toLoading());

export const useMainMenuStore = () => {
  const [state, setState] = useAtom(mainMenuAtom);
  const loadMainMenu = useCallback(
    async (): Promise<void> => {
      await withStateAsync<SortListType>(() => getSortList(), setState);
    },
    [setState],
  );

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadMainMenu };
};
