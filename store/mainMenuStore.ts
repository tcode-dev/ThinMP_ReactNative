import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import { MainMenuConstant } from '@/constants/MainMenuConstant';
import { getSortList, getVisibilityMap } from '@/config/mainMenuConfig';

const mainMenuAtom = atom<Result<MainMenuConstant[]>>(toLoading());

export const useMainMenuStore = () => {
  const [state, setState] = useAtom(mainMenuAtom);
  const loadMainMenu = useCallback(
    async (): Promise<void> => {
      await withStateAsync<MainMenuConstant[]>( async() => {
        const list = await getSortList();
        const map = await getVisibilityMap();

        return list.filter((item) => map.get(item));
      }, setState);
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
