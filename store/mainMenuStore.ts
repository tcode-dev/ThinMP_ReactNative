import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';
import { getSortList, getVisibilityMap } from '@/config/mainMenuConfig';
import { MainMenuModel } from '@/model/MainMenuModel';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';

const mainMenuAtom = atom<Result<MainMenuModel[]>>(toLoading());

export const useMainMenuStore = () => {
  const [state, setState] = useAtom(mainMenuAtom);
  const loadMainMenu = useCallback(async (): Promise<void> => {
    await withStateAsync<MainMenuModel[]>(async () => {
      const sortList = await getSortList();
      const visibilityMap = await getVisibilityMap();
      const list = sortList.map((item) => new MainMenuModel(item, !!visibilityMap.get(item)));

      return list.filter((item) => item.visibility);
    }, setState);
  }, [setState]);
  const resetMainMenu = useCallback(() => {
    setState(toLoading());
  }, [setState]);

  return { state, loadMainMenu, resetMainMenu };
};
