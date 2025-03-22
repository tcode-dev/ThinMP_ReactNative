
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';
import { SortList, VisibilityMap, SortListType, VisibilityMapType } from '@/constants/MainMenuConstant';

const SortKey = 'sort';
const VisibilityKey = 'visibility';

export const getSortList = async (): Promise<SortListType> => {
  const values = await AsyncStorage.getItem(SortKey);

  if (values !== null) {
    return JSON.parse(values) as SortListType;
  }

  return SortList;
};

export const saveSortList = async (values: SortListType): Promise<void> => {
  await setConfig(SortKey, JSON.stringify(values));
};

export const getVisibilityMap = async (): Promise<VisibilityMapType> => {
  const values = await AsyncStorage.getItem(VisibilityKey);

  if (values !== null) {
    return JSON.parse(values) as VisibilityMapType;
  }

  return VisibilityMap;
};

export const saveVisibilityMap = async (values: VisibilityMapType): Promise<void> => {
  await setConfig(VisibilityKey, JSON.stringify(values));
};