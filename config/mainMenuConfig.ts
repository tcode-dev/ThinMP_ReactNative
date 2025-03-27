
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';
import { DefaultSortList, DefaultVisibilityMap, SortableMenuType, VisibilityMapType } from '@/constants/MainMenuConstant';

const SortKey = 'sort';
const VisibilityKey = 'visibility';

export const getSortList = async (): Promise<SortableMenuType> => {
  const values = await AsyncStorage.getItem(SortKey);

  if (values !== null) {
    return JSON.parse(values) as SortableMenuType;
  }

  return DefaultSortList;
};

export const saveSortList = async (values: SortableMenuType): Promise<void> => {
  await setConfig(SortKey, JSON.stringify(values));
};

export const getVisibilityMap = async (): Promise<VisibilityMapType> => {
  const values = await AsyncStorage.getItem(VisibilityKey);

  if (values !== null) {
    return new Map(JSON.parse(values)) as VisibilityMapType;
  }

  return DefaultVisibilityMap;
};

export const saveVisibilityMap = async (values: VisibilityMapType): Promise<void> => {
  await setConfig(VisibilityKey, JSON.stringify(Array.from(values.entries())));
};