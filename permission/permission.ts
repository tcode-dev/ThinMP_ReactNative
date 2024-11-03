import { checkPermissionIos, requestPermissionIos } from 'audio';
import { PermissionsAndroid, Platform } from 'react-native';

export const checkPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);
  } else if (Platform.OS === 'ios') {
    return await checkPermissionIos();
  }

  return Promise.resolve(false);
};

export const requestPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);

    return result === PermissionsAndroid.RESULTS.GRANTED;
  } else if (Platform.OS === 'ios') {
    return await requestPermissionIos();
  }

  return Promise.resolve(false);
};
