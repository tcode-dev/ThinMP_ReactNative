import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';
import { RepeatMode, ShuffleMode } from 'audio';

const RepeatKey = 'repeat';
const ShuffleKey = 'shuffle';

export const saveRepeat = async (value: RepeatMode): Promise<void> => {
  await setConfig(RepeatKey, value.toString());
};

export const getRepeat = async (): Promise<RepeatMode> => {
  const value = await AsyncStorage.getItem(RepeatKey);

  if (value !== null) {
    return Number(value) as RepeatMode;
  }

  return RepeatMode.Off;
};

export const saveShuffle = async (value: ShuffleMode): Promise<void> => {
  await setConfig(ShuffleKey, value.toString());
};

export const getShuffle = async (): Promise<ShuffleMode> => {
  const value = await AsyncStorage.getItem(ShuffleKey);

  if (value !== null) {
    return Number(value) as ShuffleMode;
  }

  return ShuffleMode.Off;
};
