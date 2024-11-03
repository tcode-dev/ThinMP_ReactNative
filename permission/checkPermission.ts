import { checkPermissionIos } from 'audio';
import { PermissionsAndroid, Platform } from 'react-native';

const checkPermission = Platform.select({
  android: async (): Promise<boolean> =>  {
    return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO);
  },
  ios: async (): Promise<boolean> => {
    return await checkPermissionIos();
  }
})!;

export default checkPermission;
