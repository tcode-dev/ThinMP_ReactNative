
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';
import { MainMenuConstant } from '@/constants/MainMenuMap';

const MainMenuKey = 'mainMenu';

export type MainMenuMap = Map<MainMenuConstant, boolean>;

const defaultMainMenu = new Map<MainMenuConstant, boolean>([
  [MainMenuConstant.artists, true],
  [MainMenuConstant.albums, true],
  [MainMenuConstant.songs, true],
  [MainMenuConstant.favoriteSong, true],
  [MainMenuConstant.favoriteArtist, true],
  [MainMenuConstant.playlists, true],
  [MainMenuConstant.shortcut, true],
  [MainMenuConstant.recent, true],
]);

export const getMainMenu = async (): Promise<MainMenuMap> => {
  const values = await AsyncStorage.getItem(MainMenuKey);

  if (values !== null) {
    return JSON.parse(values) as MainMenuMap;
  }

  return defaultMainMenu;
};

export const saveMainMenu = async (values: MainMenuMap): Promise<void> => {
  await setConfig(MainMenuKey, JSON.stringify(values));
};
