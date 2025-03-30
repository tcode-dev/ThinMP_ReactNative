import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';
import { getSortList, getVisibilityMap, saveSortList } from '@/config/mainMenuConfig';
import { MainMenuModel } from '@/model/MainMenuModel';
import { SortableMenuType } from '@/constants/MainMenuConstant';
import { useVisibilityStore } from './visibilityStore';

const mainMenuAtom = atom<Result<MainMenuModel[]>>(toLoading());

export const useMainMenuEditStore = () => {
  const [state, setState] = useAtom(mainMenuAtom);
  const { state: visibilityState } = useVisibilityStore();
  const loadMainMenuEdit = useCallback(
    async (): Promise<void> => {
      await withStateAsync<MainMenuModel[]>( async() => {
        // if (!visibilityState.isReady) return [];

        const sortList = await getSortList();
        const visibilityMap = await getVisibilityMap();

        return sortList.map((item) => new MainMenuModel(item, !!visibilityMap.get(item)));

        // return sortList.map((item) => new MainMenuModel(item, !!visibilityState.value.get(item)));
      }, setState);
    },
    [setState, visibilityState],
  );
  const saveMainMenu = useCallback(() => {
    if (!state.isReady) return;

    const list = state.value.map((menu) => menu.item) as SortableMenuType;

    saveSortList(list);
  }, [state]);
  const update = useCallback((data: MainMenuModel[]) => {  
    setState(toSuccess(data));
  }, [setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadMainMenuEdit, saveMainMenu, update };
};
