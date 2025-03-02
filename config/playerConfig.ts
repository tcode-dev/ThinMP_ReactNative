import { RepeatMode } from 'audio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConfig } from './config';

const RepeatKey = 'repeat';

export const setRepeat = async (value: RepeatMode): Promise<void> => {
  await setConfig(RepeatKey, value.toString());
};

export const getRepeat = async (): Promise<RepeatMode> => {
    const value = await AsyncStorage.getItem(RepeatKey);

    if (value !== null) {
      return Number(value) as RepeatMode;
    }

  return RepeatMode.Off;
};
