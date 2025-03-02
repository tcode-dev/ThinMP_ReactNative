import AsyncStorage from '@react-native-async-storage/async-storage';

// データを保存する関数
export const setConfig = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // 保存に失敗した場合の処理
    console.error('Failed to save the data to the storage', e);
  }
};

// データを取得する関数
export const getConfig = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // データが存在する場合の処理
      return value;
    }
  } catch (e) {
    // 取得に失敗した場合の処理
    console.error('Failed to fetch the data from storage', e);
  }
  return null;
};
