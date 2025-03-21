
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';
import { MainMenuConstant } from '@/constants/MainMenuMap';

const MainMenuKey = 'mainMenu';

const defaultSortList = [
  MainMenuConstant.artists,
  MainMenuConstant.albums,
  MainMenuConstant.songs,
  MainMenuConstant.favoriteArtist,
  MainMenuConstant.favoriteSong,
  MainMenuConstant.playlists,
];

const defaultVisibilityMap = {
  [MainMenuConstant.artists]: true,
  [MainMenuConstant.albums]: true,
  [MainMenuConstant.songs]: true,
  [MainMenuConstant.favoriteSong]: true,
  [MainMenuConstant.favoriteArtist]: true,
  [MainMenuConstant.playlists]: true,
  [MainMenuConstant.shortcut]: true,
  [MainMenuConstant.recent]: true,
};

export const saveMainMenu = async (values: MainMenuConstant[]): Promise<void> => {
  await setConfig(MainMenuKey, JSON.stringify(values));
};

export const getMainMenu = async (): Promise<MainMenuConstant[]> => {
  const values = await AsyncStorage.getItem(MainMenuKey);

  if (values !== null) {
    return JSON.parse(values) as MainMenuConstant[];
  }

  return defaultSortList;
};
