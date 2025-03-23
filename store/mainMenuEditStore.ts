import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { withStateAsync } from '@/store/utils/withState';
import { Result, toLoading } from '@/type/Result';
import { getSortList, getVisibilityMap } from '@/config/mainMenuConfig';
import { MainMenuModel } from '@/model/MainMenuModel';

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

  useEffect(
    () => () => {
      setState(toLoading());
    },
    [setState],
  );

  return { state, loadMainMenuEdit };
};
