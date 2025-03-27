import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading, toSuccess } from '@/type/Result';
import { getSortList, getVisibilityMap, saveSortList, saveVisibilityMap } from '@/config/mainMenuConfig';
import { MainMenuModel } from '@/model/MainMenuModel';
import { MainMenuConstant, VisibilityMapType } from '@/constants/MainMenuConstant';

const mainMenuAtom = atom<Result<MainMenuModel[]>>(toLoading());

export const useMainMenuEditStore = () => {
  const [state, setState] = useAtom(mainMenuAtom);
  const loadMainMenuEdit = useCallback(
    async (): Promise<void> => {
      await withStateAsync<MainMenuModel[]>( async() => {
        const sortList = await getSortList();
        const visibilityMap = await getVisibilityMap();

        return sortList.map((item) => new MainMenuModel(item, !!visibilityMap.get(item)));
      }, setState);
    },
    [setState],
  );
  const saveMainMenu = useCallback(() => {
    if (!state.isReady) return;

    const map = new Map<MainMenuConstant, boolean>(state.value.map((menu) => [menu.item, menu.visibility]));

    saveVisibilityMap(map);
  }, [state]);
  const toggle = useCallback((item: MainMenuModel) => {
    if (!state.isReady) return;

    const index = state.value.findIndex((menu) => menu.item === item.item);
    const updatedValue = [...state.value];
    updatedValue[index] = {
      ...updatedValue[index],
      visibility: !updatedValue[index].visibility,
    };
  
    setState(toSuccess(updatedValue));
  }, [state, setState]);
  const update = useCallback((data: MainMenuModel[]) => {  
    setState(toSuccess(data));
  }, [setState]);

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadMainMenuEdit, saveMainMenu, toggle, update };
};
