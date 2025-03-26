import AsyncStorage from '@react-native-async-storage/async-storage';

export const setConfig = async (key: string, value: string): Promise<void> => {
  try {
    console.log(value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Failed to save the data to the storage', e);
  }
};

export const getConfig = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Failed to fetch the data from storage', e);
  }
  return null;
};
