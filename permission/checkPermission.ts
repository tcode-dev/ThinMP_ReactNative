import { PermissionsAndroid, Platform } from 'react-native';

import Audio from 'audio';

const checkPermission = Platform.select({
  android: async (): Promise<boolean> => {
    const permissions = [PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO, PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS];
    const results = await Promise.all(permissions.map((permission) => PermissionsAndroid.check(permission)));

    return results.every((result) => result === true);
  },
  ios: async (): Promise<boolean> => {
    return await Audio.checkPermission();
  },
})!;

export default checkPermission;
